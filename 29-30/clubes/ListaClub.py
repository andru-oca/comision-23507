from .Club import Club


class ListClub:
    def __init__(self, **kwargs) -> None:
        self.lista_clubes: list[Club] = kwargs.get("clubes", [])

    def mostrar_club(self):
        for club in self.lista_clubes:
            print(club)

    def insert_club(self, club: Club):
        self.lista_clubes.append(club)
