from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Game(models.Model):
	players = []
	roundSubmissions = []
	roomName = models.CharField(max_length=16, unique= True)
	rommPassword = models.CharField(max_length=100,unique=True)
	def __init__(self):
		self.players = []
		self.roundSubmissions = []
	def addPlayer(player):
		self.players.append(player)
	def addSubmission(submission):
		self.roundSubmissions.append(player)


class Player(models.Model):
	roomName = models.CharField(max_length=16)
	playerName= models.CharField(max_length=32, unique= True)
	owner = models.ForeignKey(User,related_name="Player", on_delete=models.CASCADE, null=True)


