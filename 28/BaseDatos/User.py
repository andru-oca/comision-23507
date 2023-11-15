import random

def picker(data,cls=None):
  
    if data == "nombre": 
        return random.choice(["Alice", "Bob", "Charlie", "David", "Eva"])
    
    if data == "dni":
       return str(random.choice(
            [random.randint(50_000_000, 99_000_000) for _ in range(100)]
        ))
    
    if data == "email":
        dominio_list: list[str] = ["yahoo.com.ar", "bardt.eu", "gobierno.ar"]
        dominio: str = random.choice(dominio_list)
        return f"{cls.nombre}@{dominio}"


class User:
    # atributo de clase
    tipo_persona: str = "fisica"

    # metodo constructor
    def __init__(self, **kwargs) -> None:
        # print(kwargs)

        self.nombre: str = self.__generador_nombre(kwargs.get("nombre", None))
        self.dni: str =self.__generador_dni(kwargs.get("dni", None))
        self.email: str = self.__generador_email(kwargs.get("email", None))

    

    # metodos
    def informe_de_persona(self) -> None:
        print(f"Soy una persona del tipo: {self.tipo_persona}")

    def __generador_email(self, email: str = None):
        if email:
            return email

        return picker("email",self) 

    def __generador_dni(self, dni: str = None):
        if dni:
            return dni

        return picker("dni") 

    def __generador_nombre(self, nombre: str = None):
        if nombre:
            return nombre

        return picker("nombre") 

    def string_text(self):
        return f"""
            Soy {self.nombre}
            Email: {self.email}
            Dni: {self.dni}
           """

    def __str__(self):
        return f"""
            Soy {self.nombre}
            Email: {self.email}
            Dni: {self.dni}
           """