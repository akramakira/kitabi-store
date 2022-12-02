from django.urls import path
from . import views

urlpatterns = [
    path('signin/', views.signin, name='signin'),
    path('login/', views.login, name='login'),
    path('sendemail/', views.sendemail, name='sendemail'),
    path('confirmemail/', views.confirmemail, name='confirmemail'),
    path('createprofile/', views.createprofile, name='createprofile'),
    path('logout/', views.logout, name='logout'),
    path('profile/', views.profile, name='profile'),
    path('editprofile/', views.editprofile, name='editprofile'),
    path('forget_password/', views.iforget, name='iforget'),
    path('checkemail/', views.checkemail, name='checkemail'),
    path('changepass/', views.changepass, name='changepass'),
    path('updatepassword/', views.updatepassword, name='updatepassword'),
    path('setnewpassword/', views.setnewpassword, name='setnewpassword'),
    path('resetpassword/', views.resetpassword, name='resetpassword'),
]
