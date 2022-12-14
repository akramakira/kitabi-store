# Generated by Django 4.1.1 on 2022-09-22 14:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('categories', models.ManyToManyField(to='categories.categorie')),
            ],
        ),
        migrations.CreateModel(
            name='Publisher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('author', models.ManyToManyField(to='books.author')),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_avaible', models.BooleanField(default=True)),
                ('title', models.CharField(max_length=255)),
                ('edition', models.IntegerField()),
                ('binding', models.CharField(max_length=255)),
                ('nbr_page', models.IntegerField()),
                ('description', models.TextField()),
                ('price', models.IntegerField()),
                ('status', models.CharField(max_length=255)),
                ('cover', models.ImageField(upload_to='books_photos/%Y')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books.author')),
                ('categorie', models.ManyToManyField(to='categories.categorie')),
                ('publisher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books.publisher')),
            ],
        ),
    ]
