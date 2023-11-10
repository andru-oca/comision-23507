# --- FUNCIONES

# def saludar(nombre:str)->str:
    
#     return f"Hola, {nombre:*^20}, bienvenido!"
    

# nombre_arg:str = input("Ingrese el nombre:\t") 

# saludo:str= saludar( nombre_arg )

# print(saludo)

# CRUD

"""
base_datos ✅

validar_operacion_crud
controllers: 
    logica de operaciones

indicar que hacer despues

"""
from base_data import generador_users
from controllers import read_user
from controllers import create_user
from controllers import delete_user

base_datos_users:list = generador_users()

print(base_datos_users)


dni:int = int(input("Ingresa el dni de busqueda:\n"))

# read_user(int(dni),base_datos_users)
# create_user(base_datos_users)

print(len(base_datos_users))
delete_user(dni,base_datos_users)
print(len(base_datos_users))




