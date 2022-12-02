from django.shortcuts import render
from books.models import Book, Author
from .models import Categorie


def categories(request):
    categories = Categorie.objects.all()
    books = []
    for cate in categories:
        books.append({
            'categ': cate,
            'books': Book.objects.filter(categorie=cate.id)
        })
    books.append({
        'categ': 'used',
        'books': Book.objects.filter(status='used')
    })
    books.append({
        'categ': 'new',
        'books': Book.objects.filter(status='new')
    })
    books.append({
        'categ': 'authors',
        'authors': Author.objects.all()
    })
    context = {
        'books': books,
        'categorie': categories
    }
    return render(request, 'Pages/categories/categories.html', context)


def categorie(request, categorie_id):
    categorie = Categorie.objects.get(id=categorie_id)
    books = Book.objects.filter(categorie=categorie_id)
    context = {
        'cat_id': categorie,
        'books': books
    }
    return render(request, 'Pages/categories/categorie.html', context)


def other_categorie(request, cate_name):
    if cate_name == 'used' or cate_name == 'new':
        books = Book.objects.filter(status=cate_name)
        authors = None
    if cate_name == "authors":
        authors = Author.objects.all()
        books = None
    context = {
        'books': books,
        'authors': authors,
        'cate_name': cate_name
    }
    return render(request, 'Pages/categories/categorie.html', context)


def author_categorie(request, author_id):
    # categorie = Categorie.objects.get(id=categorie_id)
    # if cate_name == 'used' or cate_name == 'new':
    #     books = Book.objects.filter(status=cate_name)
    author_name = Author.objects.get(id=author_id)
    books = Book.objects.filter(author=author_id)
    context = {
        'books': books,
        'cate_name': author_name,
    }
    return render(request, 'Pages/categories/categorie.html', context)
