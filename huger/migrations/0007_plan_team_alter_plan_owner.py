# Generated by Django 4.2.3 on 2024-03-17 13:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('huger', '0006_remove_plan_memebers_plan_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='plan',
            name='team',
            field=models.ManyToManyField(related_name='%(class)s_team', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='plan',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_owner', to=settings.AUTH_USER_MODEL),
        ),
    ]