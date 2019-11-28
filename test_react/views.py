from django.shortcuts import render, redirect

# Create your views here.

def index(request):
    return redirect('combochart')


def piechart(request):
    return render(request, 'piechart.html', {})


def combochart(request):
    return render(request, 'combochart.html', {})


def linecharts(request):
    return render(request, 'linecharts.html', {})


def doughnutchart(request):
    return render(request, 'doughnutchart.html', {})