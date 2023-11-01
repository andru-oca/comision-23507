# nombre:str = input("ingrese su nombre:\n")

# print("Saludos, " + nombre)
# print(f"Saludos, {nombre}")


# crear formulario de usuario

nombre = input("ingrese su nombre: \n")
apellido = input("ingrese su apellido: \n")
email = input("ingrese su email: \n")
dni = input("ingrese su dni: \n")

text_salida = f"""
    Mi nombre es: {nombre}, {apellido}
    Email: {email:_^25}
    Mi dni es : {dni:_^25}
    Bienvenido al curso 23507
    Love, Python
"""

print(text_salida)

with open("form_usuario.txt", "w",encoding="utf8") as f:
    f.write(text_salida)
