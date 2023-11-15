from BaseDatos import User
from BaseDatos import UserManager

alejo: User = User(nombre="alejo", dni="978123")
alejo.informe_de_persona()
print(alejo)


veronica:User= User()
print(veronica)

local_db:UserManager = UserManager()

local_db.insert_user(alejo)
local_db.insert_user(veronica)


local_db.save()

