from .User import User

class UserManager(object):
    def __init__(self,**kwargs):
        self.db = kwargs.get("db",[])



    def insert_user(self,user:User):
        self.db.append(user)
        print("agregamos un usuario")



    def save(self):
        db_string = ''
        if isinstance(self.db,list):
            for user in self.db:
                db_string += user.string_text() + '\n'

            with open("local_db.txt","w",encoding="latin-1") as file:
                file.write(db_string)