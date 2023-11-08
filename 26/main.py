saludo:str = "Hola mundo desde codo a codo"
print(saludo)

# --------- 
# ARRAYS -LISTS COMO UTILIZARLAS  

frutas:list = ["🍎", "🍌", "🍇", "🍓", "🍊", "🍍", "🥝", "🍒", "🥥", "🍋", "🍈", "🥭", "🍑", "🍏", "🥑", "🍉", "🍅", "🫐", "🍆", "🥔" ]

# for fruta in frutas:
#     print(fruta)

# append == JS(push)

frutas.append("😎")
frutas.append("Soy emoji :D")
frutas.append([True,lambda x : x])

# print(frutas)


# POP me permite retirar
frutas.pop()
uva:str = frutas.pop(2)

print("CON UN POP")

# for fruta in frutas:
#     print(fruta)

print(f"este item fue popeado de frutas : {uva:_^10}")

# INSERT  
frutas.insert(2,uva)

# print(frutas)

# slicing
# inversor [::-1]
five_fruits:list = frutas[:5][::-1]
resto_frutas:list = frutas[5:]

print("Primeras 5 frutas:\n" , five_fruits)
print("Resto de frutas:\n" , resto_frutas)

print(f'{"Proyecto Verdulería":_^40}')

# indice:int = 1

for indice , fruta in enumerate(five_fruits,start=10):
    print(f"La fruta {indice:2} es: {fruta:.^10} ")
    # indice += 1

"""
for index,fruta in enumerate(frutas):
    if fruta == "Soy emoji :D":
        frutas.pop(index)

print(frutas)
"""

# list comprehension
sin_emoji:list = [
    fruta  # dato que va a vivir en ese lista
    for fruta in frutas # la iteracion
    if fruta != "Soy emoji :D" # condicion
]

print(sin_emoji)


# tuple && set

fruta_nombre_valor_lista:list = ["Coco","🥥"]
fruta_nombre_valor:tuple = ("Coco","🥥")



fruta_nombre_valor_lista[1] = "🍒"

print("fruta cambiada" , fruta_nombre_valor_lista)

# fruta_nombre_valor[1] = "🍒"

print("fruta cambiada" , fruta_nombre_valor)


frutas_almacen:tuple = ("seba",[])
for fruta in ["🍎", "🍌", "🍇", "🍓", "🍊", "🍍"]:
    frutas_almacen[1].append(fruta)


print(f"El almacen de {frutas_almacen[0]} \n",frutas_almacen)

# frutas_almacen[1] = []

print(f"El almacen de {frutas_almacen[0]} \n",frutas_almacen)


muchas_frutas:list = ["🍎", "🍌", "🍇", "🍓", "🍊", "🍍"] +["🍎", "🍌", "🍇", "🍓", "🍊", "🍍"] * 2

print("lista de frutas\n",muchas_frutas)

frutas_unicas:set = set(muchas_frutas)
print("frutas unicas:\n",frutas_unicas)


# dicts

marcos:dict = {
    "nombre" : "Marcos"
,   "email" : "marquitos_emoxito@mail.com"
,   "lenguajes_programacion": ["js","rust"]
,   10 : "tengo la  camiseta de messi"
,   ("cuenta","cbu") : (11,22,33,"CBU-1231231-123123")
}

for key,value in marcos.items():
    print(f" {key} -> {value}")


# DESAFIO

"""
  Escribe un programa que muestre por consola (con un print) los
  números de 1 a 100 (ambos incluidos y con un salto de línea entre
  cada impresión), sustituyendo los siguientes:
  - Múltiplos de 3 por la palabra "fizz".
  - Múltiplos de 5 por la palabra "buzz".
  - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
"""

user:list =[
    "veronica"
,   "sebastian"    
,   "gabriel"
,   "julio"
] 

passwords:list = [
    "kjaklsjdklajsd89"
,   "kjaklsjdklajsd89"
,   "kjaklsjdklajsd89"
,   "kjaklsjdklajsd89"
    
]


lista_usuario_dictionario:list = [
    {
        "nombre" : nombre
    ,   "password": pwd
    ,   "status" : True
    ,   "email" : "change_me_123@mail.com"
    }
    for nombre , pwd in zip(user,passwords)
]


print(lista_usuario_dictionario)

from pprint import pprint as  pp
print("DATOS--------------")

for user in lista_usuario_dictionario:
    pp(user, depth=1, width=60)













































