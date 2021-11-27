from django.urls import include, path
from rest_framework import routers
from covacAPI.views import UserViewSet
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('auth/', ObtainAuthToken.as_view())
]