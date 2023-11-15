from .tools import check_db
from .read  import read_user
from .delete import delete_user

def update_user(dni:int, db_user:list = None ) ->None:
    
    if not check_db(db_user):
        return 
    
    _user:dict = read_user(dni,db_user)

    if not _user or len(_user)==0:
        print("No existe el usuario, hay que crearlo")
        return

    print("Los campos posibles a actualizar son: nombre , email")

    key:str = input("ingrese el parametro a actualizar:\n")
    value:str = input("ingrese el valor de ese parametro:\n")

    if key == "dni":
        print("No disponible a cambio")
        return 

    _user[key] = value

    delete_user(dni)

    db_user.append(_user)

    print("usuario actualizado")