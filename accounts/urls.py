from django.urls import path,include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views


urlpatterns = [
	path('api/register/', RegisterAPI.as_view()),
	path('api/login/', LoginAPI.as_view()),
	path('api/getUser/', UserAPI.as_view()),
	path('api/logout/', knox_views.LogoutView.as_view(), name = 'knox_logout'),
	path('api/auth/', include('knox.urls'))
	#destroy
]