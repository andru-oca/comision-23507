from .tools import check_db

def read_user(dni:int , db_user:list = None)->(dict | None):
    """
    Lee un usuario a partir de su número de Documento Nacional de Identidad (DNI) en una base de datos.

    Args:
    dni (int): El número de DNI del usuario que se desea buscar.
    db_user (list): La base de datos de usuarios. Debe ser una lista de diccionarios, donde cada diccionario representa a un usuario.
                    Cada usuario debe tener al menos la clave 'dni' que contiene su número de DNI.

    Returns:
    dict or None: Un diccionario con la información del usuario si se encuentra, o None si no hay base de datos o el usuario no existe.

    Example:
    >>> db = [
    ...     {"nombre": "Alice", "dni": 12345678},
    ...     {"nombre": "Bob", "dni": 87654321},
    ...     {"nombre": "Charlie", "dni": 98765432}
    ... ]
    >>> read_user(87654321, db)
    >>> El usuario es Bob

    >>> read_user(55555555, db)
    No hay ningun usuario con dni: 55555555
    """

    if not check_db(db_user):
        return 
    
    _user = {}

    for user in db_user:
        if user["dni"] == dni:
            print(f"""
                >>> El usuario es {user["nombre"]}
            """)
            _user = user
        

    if len(_user) == 0 :
        print(f"No hay ningun usuario con dni: {dni}")
    
    return _user
    