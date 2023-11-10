#function
import random

def crear_usuario_random(nombre:str=None,email:str=None,dni:int = None )->dict:
    """
    Crea un usuario con información aleatoria o con la información proporcionada.

    Args:
    nombre (str): El nombre del usuario. Si no se proporciona, se elige aleatoriamente de una lista predefinida.
    email (str): La dirección de correo electrónico del usuario. Si no se proporciona, se elige aleatoriamente de una lista predefinida.
    dni (int): El número de identificación nacional (DNI) del usuario. Si no se proporciona, se genera aleatoriamente.

    Returns:
    dict: Un diccionario que contiene la información del usuario, con las claves 'nombre', 'email', y 'dni'.

    Example:
    >>> crear_usuario_random()
    {'nombre': 'Bob', 'email': 'bob@example.com', 'dni': 73526841}

    >>> crear_usuario_random(nombre="Carlos", dni=12345678)
    {'nombre': 'Carlos', 'email': 'david@example.com', 'dni': 12345678}
    """
    
    if nombre is None and email is None and dni is None:
        nombre:str = random.choice(["Alice", "Bob", "Charlie", "David", "Eva"])
        email:str = random.choice(["alice@example.com", "bob@example.com", "charlie@example.com", "david@example.com", "eva@example.com"]
    )
        dni:int = random.choice(
            [random.randint(50_000_000, 99_000_000) for _ in range(4)]
        )


    return {
        "nombre":nombre,
        "email":email,
        "dni":dni
    }


def generador_users(cant_user:int=10)->list[dict]:
    """
    Genera una lista de usuarios aleatorios con información ficticia.

    Args:
    cant_user (int): La cantidad de usuarios que se generarán. Por defecto, se generan 10 usuarios.

    Returns:
    list: Una lista que contiene información aleatoria sobre usuarios, donde cada usuario es un diccionario con las siguientes claves:
        - 'nombre': Nombre aleatorio seleccionado de una lista predefinida.
        - 'email': Dirección de correo electrónico aleatoria seleccionada de una lista predefinida.
        - 'dni': Número de identificación nacional aleatorio en el rango de 50,000,000 a 99,000,000.

    Example:
    >>> generador_users(5)
    [
        {'nombre': 'Alice', 'email': 'alice@example.com', 'dni': 75892314},
        {'nombre': 'Bob', 'email': 'bob@example.com', 'dni': 67845129},
        {'nombre': 'Charlie', 'email': 'charlie@example.com', 'dni': 81236758},
        {'nombre': 'David', 'email': 'david@example.com', 'dni': 92347865},
        {'nombre': 'Eva', 'email': 'eva@example.com', 'dni': 56783241}
    ]
    """
    return [
        crear_usuario_random()
        for _ in range(cant_user)
    ]
