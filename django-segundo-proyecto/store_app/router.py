from rest_framework.routers import SimpleRouter
from .viewsets import StoreViewSet

router = SimpleRouter()

# en este caso se le anexa a la ruta de las urls de la app
router.register("api", StoreViewSet)
