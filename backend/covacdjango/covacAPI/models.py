from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Person(models.Model):
    user =  models.OneToOneField(User, on_delete=models.CASCADE, related_name='person')
    appointmentDate = models.DateField()
    patientName = models.CharField(max_length=32)
    place = models.CharField(max_length=100)