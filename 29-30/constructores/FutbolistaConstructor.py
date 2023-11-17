class ConstructorFutbolista:
    def __init__(self, **kwargs):
        self.nombre: str = kwargs.get("nombre", "jugador")
        self.dni: int = kwargs.get("dni", 0)
        self.position: str = kwargs.get("position", "banca")
        self.cant_goles: int = kwargs.get("cant_goles", 0)
