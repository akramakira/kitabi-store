from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('bestSellers', views.bestSellers, name="bestSellers"),
    path('newBooks', views.newBooks, name="newBooks"),
    path('search', views.search, name="search"),
]
