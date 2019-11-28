from django.urls import path
from test_react import views

urlpatterns = [
    path('', views.index, name="index"),
    path('combochart', views.combochart, name="combochart"),
    path('piechart', views.piechart, name="piechart"),
    path('doughnutchart', views.doughnutchart, name="doughnutchart"),
    path('linecharts', views.linecharts, name="linecharts"),
]