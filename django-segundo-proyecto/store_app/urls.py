from django.contrib import admin
from django.urls import path, include


from .views import (
    StoreListView,
    StoreDetailView,
    StoreCreateView,
    StoreUpdateView,
    StoreDeleteView,
)

app_name = "store"

urlpatterns = [
    path("", StoreListView.as_view(), name="all"),
    path("create/", StoreCreateView.as_view(), name="create"),
    path("<int:pk>/detail/", StoreDetailView.as_view(), name="detail"),
    path("<int:pk>/update/", StoreUpdateView.as_view(), name="update"),
    path("<int:pk>/delete/", StoreDeleteView.as_view(), name="delete"),
]


# -> a la urls.py del project


# router


from .router import router

urlpatterns += router.urls
