# clases abstractas

from abc import ABC, abstractclassmethod
from constructores import ConstructorFutbolista
from clubes import ListClub, Club

# Football


class Futbolista(ABC):
    nombre: str

    @abstractclassmethod
    def get_nombre(self):
        pass

    @abstractclassmethod
    def get_actual_club(self):
        pass

    @abstractclassmethod
    def get_record_goles(self):
        pass


# Composicion por Herencia Multiple


class FutbolistaArgentino(Futbolista, ConstructorFutbolista, ListClub):
    def __init__(self, **kwargs):
        self.nacionalidad = kwargs.get("nacionalidad", "argentino")
        # super().__init__(**kwargs)
        ConstructorFutbolista.__init__(self, **kwargs)
        ListClub.__init__(self, **kwargs)

    def get_nombre(self):
        return f"soy un futbolista {self.nacionalidad}, del equipo argentino, mi nombre es: {self.nombre}"

    def get_actual_club(self):
        pass

    def get_all_clubs(self):
        print(f"Soy {self.nombre} tengo asociado los siguientes clubs:\n")
        self.mostrar_club()

    def get_record_goles(self):
        pass


class FutbolistaBrasilero(Futbolista):
    def __init__(self, nombre: str):
        self.nombre = nombre

    def get_nombre(self):
        return f"Sou um jogador de futebol brasileiro, meu nome é: {self.nombre}"

    def get_actual_club(self):
        pass

    def get_record_goles(self):
        pass


def main():
    barcelona: Club = Club(nombre="barcelona", lugar="barcelon")
    estudiantes: Club = Club(nombre="estudiantes", lugar="la plata")
    sacachispas: Club = Club(nombre="sacachispas", lugar="soldatti")

    messi: FutbolistaArgentino = FutbolistaArgentino(
        nombre="messi",
        dni=89712839712,
        position="delantero",
        nacionalidad="español",
        clubes=[sacachispas],
    )

    print(messi.get_nombre())

    # ASCOCIACION DE CLASES
    messi.insert_club(barcelona)
    messi.insert_club(estudiantes)

    messi.get_all_clubs()

    ronaldo: FutbolistaBrasilero = FutbolistaBrasilero(nombre="ronaldo")

    print(ronaldo.get_nombre())


if __name__ == "__main__":
    print("Corre programa")
    main()
