from django.urls import include, path
from rest_framework import routers
from .views import GetAuthToken
from covacAPI.views import UserViewSet
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register('users', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('auth/', GetAuthToken.as_view())
]