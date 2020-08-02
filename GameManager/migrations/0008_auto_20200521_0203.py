# Generated by Django 2.1 on 2020-05-21 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GameManager', '0007_auto_20200520_2015'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='roomName',
            field=models.CharField(default='exampleroom', max_length=16),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='player',
            name='playerName',
            field=models.CharField(max_length=32, unique=True),
        ),
    ]