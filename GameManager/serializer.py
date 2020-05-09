from rest_framework import serializers
from .models import Player, Game

#Player serializer

class PlayerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Player
		fields = '__all__'


class GameSerializer(serializers.ModelSerializer):
	class Meta:
		model = Game
		fields = '__all__'