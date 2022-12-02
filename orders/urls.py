from django.urls import path
from . import views

urlpatterns = [
    path('add_to_cart/<int:book_id>', views.add_to_cart, name='add_to_cart'),
    path('confirm_buying/<int:order_id>', views.confirm_buying, name='confirm_buying'),
    path('basket', views.basket, name='basket'),
]
