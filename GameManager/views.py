from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Player
# Create your views here.


'''
	takes in a player and adds it to arr of players saved in db
'''
def createPlayer(request): 
	print("creating player")
	newPlayer = Player(playerName = request.POST['playerName'])
	if request.POST['what'] is not '':
		newPlayer.save()
	return HttpResponseRedirect('/getAllPlayers/')
'''
	takes in a player and removes it to arr of players saved in db
'''
def removePlayer(request, player_id): 
	playerToDelete = Player.objects.get(id = player_id)
	playerToDelete.delete();
	return HttpResponseRedirect('/getAllPlayers/')

'''
	displays all available players as they arrive
'''
def getAllPlayers(request):
	allPlayers = Player.objects.all();
	return render(request,'AllPlayers.html',{'allPlayers':allPlayers})

def heartBeat(request):
	return HttpResponse('received heartbeat')

