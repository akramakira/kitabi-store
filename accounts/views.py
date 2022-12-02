import email
from random import randint
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from django.contrib import auth
import re
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings

from accounts.models import UserProfile


def signin(request):
    fname = 'first_name'
    lname = 'last_name'
    email = None
    username = None
    password = None
    isCreated = False
    if request.method == 'POST' and 'btnsignin' in request.POST:
        if 'signin-username' in request.POST:
            username = request.POST['signin-username']
            if 'signin-email' in request.POST:
                email = request.POST['signin-email']
                if 'signin-password' in request.POST:
                    password = request.POST['signin-password']
                    if fname and lname and email and username and password:
                        if User.objects.filter(username=username).exists():
                            messages.error(
                                request, 'this username is already token')
                        else:
                            if User.objects.filter(email=email).exists():
                                messages.error(
                                    request, 'this email is used in an other account, try to login')
                            else:
                                patt = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.][a-zA-Z]+$"
                                if re.match(patt, email):
                                    try:
                                        user = User.objects.create_user(
                                            first_name=fname, last_name=lname, email=email, username=username, password=password)
                                        user.save()
                                        messages.success(
                                            request, f'Welcome {username}, Please create a profile to take advantage of all the features of the website ')
                                        isCreated = True
                                        auth.login(request, user)
                                    except:
                                        messages.error(
                                            request, 'we are sorry for this, try again later')

                                else:
                                    messages.error(
                                        request, 'invalid email address, try with an other one')
                    else:
                        messages.error(
                            request, 'Verify that all fields are entered')
                else:
                    messages.error(request, 'unknown error in password')
            else:
                messages.error(request, 'unknown error in email')
        else:
            messages.error(request, 'unknown error in username')
    else:
        messages.error(
            request, 'error when post informations, try again')
    if isCreated:
        return render(request, 'Pages/create_profile.html')
    else:
        return redirect('index')


def createprofile(request):
    fname = None
    lname = None
    address = None
    phone = None
    if request.method == 'POST':
        if request.user is not None and request.user.id != None:
            if 'profile-fname' in request.POST and re.search('^[\u0621-\u064Aa-zA-Z0-9(é|è)]+$', request.POST['profile-fname']):
                fname = request.POST['profile-fname']
                if 'profile-lname' in request.POST:
                    lname = request.POST['profile-lname']
                    if 'profile-fname' in request.POST:
                        address = request.POST['profile-address']
                        if 'profile-lname' in request.POST:
                            phone = request.POST['profile-phone']
                            if phone.startswith('+213'):
                                phone = phone[4:]
                        else:
                            messages.error(
                                request, 'please enter your phone number')
                    else:
                        messages.error(request, 'please enter your address')
                else:
                    messages.error(request, 'please enter your last name')
            else:
                messages.error(request, 'please enter your first name')

            if fname and lname and address and phone:
                request.user.first_name = fname
                request.user.last_name = lname
                userProfile = UserProfile(
                    user=request.user, address=address, phone_nbr=phone)
                request.user.save()
                userProfile.save()
                messages.success(request, 'Profile Created Successfully')
            else:
                messages.error(request, 'verify that all fields are filled')
    else:
        messages.error(
            request, 'Error when post informations, please try again')
    return redirect('index')


def login(request):
    if request.method == 'POST' and 'btnlogin' in request.POST:
        username = request.POST['login-email']
        password = request.POST['login-password']
        user = None
        if username and password:
            user = auth.authenticate(username=username, password=password)
            if user is not None:
                auth.login(request, user)
            else:
                messages.error(request, 'Username or Password invalid')
        else:
            messages.error(request, 'Verify that all fields are entered ')
    else:
        messages.error(
            request, 'error when post informations, try again')
    return redirect('index')


def logout(request):
    if request.user.is_authenticated:
        auth.logout(request)
    return redirect('index')


def profile(request):
    if request.user.is_authenticated and not request.user.is_anonymous:
        user = request.user
        if UserProfile.objects.filter(user=user).exists():
            profile = UserProfile.objects.get(user=user)
            context = {
                'user': user,
                'profile': profile
            }
            return render(request, 'Pages/profile.html', context)
        else:
            profile = None
            return render(request, 'Pages/create_profile.html')
    else:
        messages.error(request, 'you are not logged in')
        return redirect('index')


def editprofile(request):
    if request.POST and 'btnsave' in request.POST:
        fname = None
        lname = None
        address = None
        phone = None
        if 'profile-fname' in request.POST and re.search('^[\u0621-\u064Aa-zA-Z0-9(é|è)]+$', request.POST['profile-fname']) and len(request.POST['profile-fname']) >= 3:
            fname = request.POST['profile-fname']
            if 'profile-lname' in request.POST and re.search('^[\u0621-\u064Aa-zA-Z0-9(é|è)]+$', request.POST['profile-lname']) and len(request.POST['profile-lname']) >= 3:
                lname = request.POST['profile-lname']
                if 'profile-address' in request.POST and re.search('^([\u0621-\u064Aa-zA-Z0-9(é|è)]+(_|-| )*[\u0621-\u064Aa-zA-Z0-9(é|è)]+)+$', request.POST['profile-fname']) and len(request.POST['profile-fname']) >= 3:
                    address = request.POST['profile-address']
                    if 'profile-phone' in request.POST and re.search('^(00213|\+213|0){0,1}(5|6|7)[0-9]{8}$', request.POST['profile-phone']) and len(request.POST['profile-phone']) >= 9:
                        phone = request.POST['profile-phone']
                        if phone.startswith('+213'):
                            phone = phone[4:]
                    else:
                        messages.error(
                            request, 'phone number is not valid')
                else:
                    messages.error(request, 'address is not valid')
            else:
                messages.error(request, 'last name is not valid')
        else:
            messages.error(request, 'first name is not valid')
        if fname and lname and address and phone:
            if request.user is not None and request.user.id != None:
                if UserProfile.objects.filter(user=request.user).exists():
                    userprofile = UserProfile.objects.get(user=request.user)
                    request.user.first_name = fname
                    request.user.last_name = lname
                    userprofile.address = address
                    userprofile.phone_nbr = phone
                    request.user.save()
                    userprofile.save()
                    auth.login(request, request.user)
                    messages.success(request, 'new profile informations saved')
                    return redirect('profile')
                else:
                    return redirect('createprofile')
            else:
                messages.error(request, 'error when post informations')
                return redirect('index')
        else:
            messages.error(request, 'verify that all fields are entred')
            return redirect('index')
    else:
        messages.error(request, 'something was wrong, try again')
        return redirect('index')


def sendemail(request):
    confirm_code = format(randint(1, 9999), "04")
    if request.user.is_authenticated and not request.user.is_anonymous:
        user = request.user
        userprofile = UserProfile.objects.get(user=user)
        if userprofile:
            if not userprofile.is_confirm_email:
                send_mail(
                    'Activation kitabi store',
                    f'Confirmations code is {confirm_code}',
                    settings.EMAIL_HOST_USER,
                    ['bengueddoudjakram@gmail.com'],
                    fail_silently=False,
                )
                request.session['confirmcode'] = confirm_code
                return render(request, 'parts/confirm_email.html')
            else:
                messages.warning(request, 'this email was confirmed')
                return redirect('index')
        else:
            messages.error(request, 'you shold create profile first')
            return redirect('index')
    else:
        messages.warning(request, 'you should be logged in')
        return redirect('index')


def confirmemail(request):

    if request.method == 'POST':
        if 'confirmcode' in request.session and 'emailcode' in request.POST and 'confirmemailcode' in request.POST:
            if request.session['confirmcode'] == request.POST['emailcode']:
                if request.user.is_authenticated and not request.user.is_anonymous:
                    user = request.user
                    userprofile = UserProfile.objects.get(user=user)
                    if userprofile:
                        if not userprofile.is_confirm_email:
                            userprofile.is_confirm_email = True
                            userprofile.save()
                messages.success(request, "your email was confirmed successfully")
            else:
                messages.error(request, 'code invalide')
        else:
            messages.error(request, 'error informations')
    else:
        messages.error(request, 'error when post informations')
    return redirect('profile')


def iforget(request):
    if request.user.is_authenticated and not request.user.is_anonymous:
        messages.warning(request, f'you are logged in with the username: \'{request.user}\', try to change password in profile')
    else:
        return render(request, 'parts/select_account.html')


def checkemail(request):
    check_code = format(randint(1, 9999), "04")
    if request.method == 'POST' and 'selectaccountcode' in request.POST:
        if 'selectaccount' in request.POST:
            email = request.POST['selectaccount']
        else:
            email = None
            messages.error(request, 'unknown error')
        if email:

            if User.objects.filter(email=email).exists():
                user = User.objects.get(email=email)
                userprofile = UserProfile.objects.get(user=user)
                send_mail(
                    'reset your kitabi-store password',
                    f'Hello mr/ms {user.first_name} {user.last_name}, you see this message because there\'s some one try to reset your account password.\nif it was you who tried to do this, use this code to reset your password:\n {check_code}',
                    settings.EMAIL_HOST_USER,
                    [email],
                    fail_silently=False,
                )
                request.session['checkcode'] = check_code
                request.session['usermail'] = email
                return render(request, 'parts/confirm_owner.html')
            else:
                messages.error(request, 'there\'s no account linked with this email')
                return redirect('index')
        else:
            messages.error(request, 'inser the email first')
        
    else:
        return redirect('index')


def setnewpassword(request):
    if request.method == 'POST':
        if 'checkcode' in request.session and 'passwordcode' in request.POST and 'confirmpasswordcode' in request.POST:
            if request.session['checkcode'] == request.POST['passwordcode']:
                return render(request, 'parts/setnewpassword.html')
            else:
                messages.error(request, 'code invalide')
                return redirect('index')
        else:
            messages.error(request, 'error informations')
            return redirect('index')
    else:
        messages.error(request, 'error when post informations')
        return redirect('index')


def resetpassword(request):
    if request.method == 'POST' and 'setnewpassword' in request.POST and 'newpassword' in request.POST and 'newrepassword' in request.POST:
        if request.POST['newpassword'] and request.POST['newrepassword']:
            if request.POST['newpassword'] == request.POST['newrepassword']:
                usermail = request.session['usermail']
                user = User.objects.get(email=usermail)
                changepassword(request, request.POST['newpassword'], user)
                auth.login(request, user)
                return redirect('index')
            else:
                messages.error(request, 'verify that you enter same password in both fields')
        else:
            messages.error(request, 'please fill all fields')
            return redirect('index')
    else:
        messages.error(request, 'error when post informations')
        return redirect('index')


def changepass(request):
    if request.user.is_authenticated and not request.user.is_anonymous:
        return render(request, 'parts/changepass.html')
    else:
        return redirect('index')


def updatepassword(request):
    if request.method == 'POST' and 'setnewpassword' in request.POST and 'newpassword' in request.POST and 'newrepassword' in request.POST and 'oldpassword' in request.POST:
        if request.POST['newpassword'] and request.POST['newrepassword'] and request.POST['oldpassword']:
            if request.POST['newpassword'] == request.POST['newrepassword']:
                if check_password(request.POST['oldpassword'], request.user.password):
                    changepassword(request, request.POST['newpassword'], request.user)
                    auth.login(request, request.user)
                    return redirect('index')
            else:
                messages.error(request, 'verify that you enter same password in both fields')
                return redirect('index')
        else:
            messages.error(request, 'please fill all fields')
            return redirect('index')
    else:
        messages.error(request, 'error when post informations')
        return redirect('index')


def changepassword(request, newpassword, theuser):
        user = theuser
        user.set_password(newpassword)
        user.save()
        messages.success(request, 'your password was changed')
