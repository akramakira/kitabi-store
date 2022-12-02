from django.db import models
from django.contrib.auth.models import User
from books.models import Book


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order_date = models.DateTimeField()
    details = models.ManyToManyField(Book, through='OrderDetails')
    is_finished = models.BooleanField()

    def __str__(self):
        return 'User : ' + str(self.user) + ', order id: ' + str(self.id)


class OrderDetails(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    price = models.IntegerField()

    def __str__(self):
        return 'User: ' + self.order.user + ', Book: ' + self.book + ', order id: ' + str(self.order.id)
