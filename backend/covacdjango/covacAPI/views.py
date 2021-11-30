from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from .models import Person 
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


    def patch(self, request, *args, **kwargs):
        token = Token.objects.get(key=request.data['token'])
        user = User.objects.get(id= token.user_id)
        user.person.appointmentDate = request.data["appointmentDate"][:10]
        user.person.patientName = request.data["name"]
        user.person.place = request.data["place"]
        user.person.save(update_fields=['appointmentDate', 'patientName', 'place'])
        return Response(status=204)


class GetAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(GetAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        user_serializer = UserSerializer(user, many=False)
        return Response({'token': token.key, 'user':user_serializer.data})
