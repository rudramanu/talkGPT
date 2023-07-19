from flask_mongoengine import Document
from mongoengine import StringField

class User(Document):
    name = StringField(required=True)
    email = StringField(required=True)
    password = StringField(required=True)
    image = StringField()
    contact = StringField()

    meta = {
        'collection': 'user'
    }