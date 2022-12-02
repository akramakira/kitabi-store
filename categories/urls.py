from django.urls import path
from . import views

urlpatterns = [
    path('', views.categories, name="categories"),
    path('<int:categorie_id>/', views.categorie, name="categorie"),
    path('author/<int:author_id>/', views.author_categorie, name="author"),
    path('<str:cate_name>/', views.other_categorie, name="categorie"),
]
