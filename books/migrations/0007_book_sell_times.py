# Generated by Django 4.1.1 on 2022-09-25 07:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0006_book_pub_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='sell_times',
            field=models.IntegerField(default=0),
        ),
    ]