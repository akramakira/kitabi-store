# Generated by Django 4.1.1 on 2022-10-04 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0007_book_sell_times'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='bio',
            field=models.TextField(null=True),
        ),
    ]
