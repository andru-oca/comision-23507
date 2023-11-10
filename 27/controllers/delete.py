from .tools import check_db

def delete_user(dni:int , db_user:list=None):
    if not check_db(db_user):
        return


    print("Se removió el usuario con dni", dni ,sep="\n")

    for index,user in enumerate(db_user):
        for user  in db_user:
            if user["dni"] == dni:
                db_user.pop(index)

    