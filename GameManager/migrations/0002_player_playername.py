# Generated by Django 2.1 on 2020-05-06 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GameManager', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='playerName',
            field=models.TextField(default='name'),
            preserve_default=False,
        ),
    ]
