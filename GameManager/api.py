from .models import Player, Game
from rest_framework import viewsets, permissions
from .serializer import GameSerializer, PlayerSerializer

#Player viewset
class PlayerViewSet(viewsets.ModelViewSet):
	queryset = Player.objects.all()
	permission_classes = [permissions.AllowAny]
	serializer_class = PlayerSerializer
#Game viewset
class GameViewSet(viewsets.ModelViewSet):
	queryset = Game.objects.all()
	permission_classes = [permissions.AllowAny]
	serializer_class = GameSerializer