from datetime import datetime
from email.policy import default
from django.db import models
from categories.models import Categorie


class Book(models.Model):
    is_avaible = models.BooleanField(default=True)
    title = models.CharField(max_length=255)
    edition = models.IntegerField()
    binding = models.CharField(max_length=255)
    nbr_page = models.IntegerField()
    description = models.TextField()
    price = models.IntegerField()
    status = models.CharField(max_length=255)
    cover = models.ImageField(upload_to='books_photos/%Y')
    sell_times = models.IntegerField(default=0)
    pub_date = models.DateTimeField(default=datetime.now)
    author = models.ForeignKey('Author', on_delete=models.CASCADE)
    publisher = models.ForeignKey('Publisher', on_delete=models.CASCADE)
    categorie = models.ManyToManyField(Categorie)
    language = models.CharField(max_length=255, default="english")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']


class Author(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='authors', default=None)
    bio = models.TextField(null=True)
    categories = models.ManyToManyField(Categorie)

    def __str__(self):
        return self.name


class Publisher(models.Model):
    name = models.CharField(max_length=255)
    author = models.ManyToManyField(Author)

    def __str__(self):
        return self.name
