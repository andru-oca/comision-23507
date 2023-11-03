# CONDICIONALES - ITERACIONES - TEXTOS - DATA TYPES - IMPORTACION - SQLITE

# IF -ELSE -ELIF

# LOGIN UTILIZANDO DATOS SIMPLES

"""
from users.db import PASS , USER

# print(f"EL usuario debe ser {USER} y el pass: {PASS}")

email:str = input("ingrese su email:\n")
password:str = input("ingrese su password:\n")

if email == USER :
    if password == '':
        print("te olvidaste la contraseña")
    
    elif ' ' in password:
        print("ojo que tenes un espacio vacio") 

    else:
        if password == PASS:
            print("😁 contraseña válida")
else:
    print("No es un usuario válido")
"""


# ITERACION

number = 0

# while number < 10:
#     print(f"Number is {number}!")
#     number = number + 1

# refactor a utilizar un flag

# flag = True

# # while True:
# while flag:
    
#     if number < 10 :
#         print(f"Number is {number}!")
#         number += 1   # number = number + 1

#     else:
#         flag = not flag  # !
#     #   break
# else:
#     print("esto saldra?")

# FOR

# esto es Jorrible
# for (i=0;i<10;i++):
#     print(i)

# texto = "hola mundo desde codo a codo"

# for i in range( len(texto) ):
#     print(texto[i])

# print(f"{'Inicio de bucle!':_^40}")
# for char in texto:
#     print(char) 
# else:
#     print(f"{'Cierre de bucle!':_^40}")


## VAMOS A CREAR UN BASE DE DATOS SQL MUUUUY CHIQUITA

"""
import sqlite3

nombre_base_datos = "users.db"

con = sqlite3.connect(nombre_base_datos)
cur = con.cursor()


create_table_query = f'''
    CREATE TABLE USER (
        user_id INT 
    ,   email VARCHAR
    ,   password VARCHAR
    )

'''

cur.execute(
    create_table_query
)


print(f"{'Inicio de bucle!':_^40}")
for user_id in range(3):

    print("DATA DE USUARIO")
    email:str = input("ingrese su email:\n")
    password:str = input("ingrese su password:\n")

    insert_query = f'''
    INSERT INTO USER
        VALUES
    ({user_id} , '{email}' , '{password}' )
    '''

    cur.execute(insert_query)

    print(f"Usuario {email} insertado")
else:
    con.commit()
    print("COMMITEADO DE INSERCION DE USUARIOS ")
    con.close()
    print("Conexión cerrada")
    print(f"{'Cierre de bucle!':_^40}")

"""




# CREAR COMPROBADOR DE AÑO BISIESTO

# for year in range(0,40,10):
#     print(year) 

year_top = input("ingresa el año top:\t")
year_top = int(year_top)

for year in range(1995,year_top):
    """
    DocString
    ---------

    Este bloque de codigo valida dos condiciones
    para saber si es año bisiesto o no

    """

    primera_condicion = ( year % 400 == 0)
    segunda_condicion = ( year % 4 == 0)  and (year % 100 != 0 )

    if primera_condicion or segunda_condicion:
        print(f"El año {year} es bisiesto 😁")

