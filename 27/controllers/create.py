from .tools import check_db
from .read  import read_user

from base_data.generador_usuarios import crear_usuario_random


def create_user( db_user:list = None )->dict:
    
        
    if not check_db(db_user):
        return 
    

    nombre:str = input("Ingrese su nombre:\n")
    email:str = input("Ingrese su email:\n")
    dni:int = int(input("Ingrese su dni:\n"))

    user:dict = crear_usuario_random(
                nombre, email, dni
            )
    
    db_user.append(user)

    read_user(dni,db_user)


    