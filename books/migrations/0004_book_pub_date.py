# Generated by Django 4.1.1 on 2022-09-23 10:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0003_author_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]