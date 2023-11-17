class Club:
    def __init__(self, **kwargs) -> None:
        self.nombre = kwargs.get("nombre")
        self.lugar = kwargs.get("lugar")

    def __str__(self) -> str:
        return f"""
        Soy el club: {self.nombre}
        Mi locacion es : {self.lugar}
        """
