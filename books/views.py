from django.shortcuts import render
from .models import Book, Author
from categories.models import Categorie


def book(request, book_id):
    book = Book.objects.get(id=book_id)
    author = Author.objects.get(book=book)
    categories = Categorie.objects.filter(book=book_id)
    context = {
        'book': book,
        'categorie': categories,
        'author': author,
    }
    return render(request, 'Pages/book.html', context)
