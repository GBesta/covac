from django.db import transaction
from django.contrib.auth.models import User
from django.utils import translation
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Person


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['appointmentDate', 'patientName', 'place']

class UserSerializer(serializers.ModelSerializer):
    person = PersonSerializer(default=None,required=False)
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'person']
        extra_kwargs = {'password': {'write_only': True, 'required' : True}}
    
    @transaction.atomic
    def create(self, validated_data):
        person_data = validated_data.pop('person')
        user = User.objects.create_user(**validated_data)
        if(person_data != None):
            user.person = Person.objects.create(user=user, **person_data)
        else:
            default_data = {
                "appointmentDate": "2000-01-01",
                "patientName" : "",
                "place": ""
            }
            user.person = Person.objects.create(user=user, **default_data)
        user.save()
        Token.objects.create(user=user)
        return user

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'password']
#         extra_kwargs = {'password' : {'write_only' : True, 'required' : True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         return user
