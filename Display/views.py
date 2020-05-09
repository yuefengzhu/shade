from django.shortcuts import render

# Create your views here.

def displayFrontPage(request):
	return render(request, 'FrontPage.html')