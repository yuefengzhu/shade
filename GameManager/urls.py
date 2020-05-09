from rest_framework import routers
from .api import PlayerViewSet, GameViewSet
from .views import createPlayer, heartBeat, getAllPlayers
from django.urls import path, include

router = routers.DefaultRouter()
router.register('api/Player', PlayerViewSet, 'Player')
router.register('api/Game', GameViewSet, 'Game')
# router.register('createPlayer', createPlayer, 'createPlayer')
# router.register(r'heartBeat', heartBeat, basename = "heartBeat")

urlpatterns = [
    path('', include(router.urls)),
    path('heartBeat/', heartBeat),
    path('getAllPlayers/',getAllPlayers)
]

# urlpatterns = router.urls