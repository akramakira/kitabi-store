from django.utils import timezone
from django.shortcuts import render, redirect

from accounts.models import UserProfile
from .models import Order, OrderDetails
from books.models import Book
from django.contrib import messages


def add_to_cart(request, book_id):
    user = None
    book = None
    price = None
    order_date = None
    profile = False

    if request.POST and 'buybtn' in request.POST:
        try:
            book = Book.objects.get(id=book_id)
            if request.user.is_authenticated and not request.user.is_anonymous:
                user = request.user
                if UserProfile.objects.filter(user=user).exists():
                    profile = True
                    price = book.price
                    order_date = timezone.now()
                else:
                    profile = False
                    messages.error(
                        request, 'You should create a prifile first')
            else:
                messages.error(request, 'You should be logged in first')
        except:
            messages.error(request, 'this book is not avaible')
    else:
        messages.error(
            request, 'Error when post informations, please try again')

    if user and book and price and order_date and profile:
        if Order.objects.filter(user=user, is_finished=False).exists():
            order = Order.objects.get(user=user, is_finished=False)
        else:
            order = Order(user=user, order_date=order_date, is_finished=False)
            order.save()
        order_details = OrderDetails(book=book, order=order, price=price)
        order_details.save()
        messages.success(request, 'The book "' + book.title +
                         '" successfuly added to cart')
        return redirect('/books/' + str(book.id))
    elif profile == False:
        return redirect('profile')
    else:
        messages.error(request, "sorry, something was wrong")
        return redirect('index')


def basket(request):
    if request.user.is_authenticated and not request.user.is_anonymous:
        order = None
        orderDetails = None
        user = request.user
        userProfile = None
        price = 0
        if UserProfile.objects.filter(user=user).exists():
            if Order.objects.filter(user=request.user, is_finished=False).exists():
                userProfile = UserProfile.objects.get(user=user)
                order = Order.objects.get(user=request.user, is_finished=False)
                orderDetails = OrderDetails.objects.filter(order=order)
                for i in orderDetails:
                    price = price + i.price
        else:
            messages.error(request, 'Please create a profile first')
        context = {
            'order': order,
            'order_details': orderDetails,
            'user': user,
            'user_profile': userProfile,
            'price': price
        }
        return render(request, 'Pages/basket.html', context)
    else:
        messages.error(request, 'You should be logged in')
        return redirect('index')

def confirm_buying(request, order_id):
    
    if request.POST and 'btnconfirm' in request.POST:
        try:
            order = Order.objects.get(id=order_id)
            if request.user.is_authenticated and not request.user.is_anonymous:
                user = request.user
                if UserProfile.objects.filter(user=user).exists():
                    order.is_finished = True
                    order.save()
                    messages.success(request, 'successfuly confirm buying')
                else:
                    messages.error(request, 'You should create a prifile first')
            else:
                messages.error('You should be logged in first')
        except:
            messages.error(request, 'there is some problems with this order, we try to fix it')
    else:
        messages.error(request, 'Error when post informations, please try again')
    return redirect('basket')