from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=510, default="unknown address")
    phone_nbr = models.IntegerField(default=666666666)
    is_confirm_email = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
