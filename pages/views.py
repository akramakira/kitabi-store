from multiprocessing import context
from django.shortcuts import render
from books.models import Book, Author
from categories.models import Categorie
from categories.views import categorie

def index(request):
    categorie = []
    for cate in Categorie.objects.all():
        categorie.append({
            'categ': cate,
            'book': Book.objects.filter(categorie=cate.id)[0],
        })
    context = {
        'books': Book.objects.all(),
        'newbooks': Book.objects.order_by('-pub_date'),
        'bestsellers': Book.objects.all().order_by('-sell_times'),
        'categories': categorie,
    }
    
    return render(request, 'Pages/index.html', context)


def bestSellers(request):
    books = Book.objects.all().order_by('-sell_times')
    context = {
        'books': books,
    }
    return render(request, 'Pages/bestSellers.html', context)


def newBooks(request):
    context = {
        'newbooks': Book.objects.order_by('-pub_date')
    }
    return render(request, 'Pages/newBooks.html', context)


def search(request):
    books = None
    authors = None
    categories = []
    value = None
    if 'searchinput' in request.GET and 'search' in request.GET:
        value = request.GET['searchinput']
        searchType = request.GET['search']
        if value:
            if searchType == 'author':
                authors = Author.objects.filter(name__icontains=value)
             # add search in author bio
            elif searchType == 'title':
                books = Book.objects.filter(title__icontains=value) | Book.objects.filter(
                    description__icontains=value)
            elif searchType == 'categorie':
                # categories = Categorie.objects.filter(name__icontains=value)
                for cate in Categorie.objects.filter(name__icontains=value):
                    categories.append({
                        'categ': cate,
                        'book': Book.objects.filter(categorie=cate.id)[0],
                    })

    context = {
        'books': books,
        'categories': categories,
        'authors': authors,
    }
    return render(request, 'Pages/search.html', context)
