from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Game(models.Model):
	players = []
	roomName = models.CharField(max_length=16, unique= True)
	rommPassword = models.CharField(max_length=100,unique=True)
	def __init__(self):
		self.players = []
	def addPlayer(player):
		self.players.append(player)


class Player(models.Model):
	playerName= models.CharField(max_length=16, unique=True),
	owner = models.ForeignKey(User,related_name="Player", on_delete=models.CASCADE, null=True)


