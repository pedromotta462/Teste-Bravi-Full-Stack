from itertools import count
from typing import Optional

from flask import Flask, request, jsonify
from flask_pydantic_spec import (
    FlaskPydanticSpec, Response, Request
)
from pydantic import BaseModel, Field
from tinydb import TinyDB, Query
from tinydb.storages import MemoryStorage


server = Flask(__name__)
spec = FlaskPydanticSpec('flask', title='Lista de Contatos')
spec.register(server)
database = TinyDB('database.json')
c = count()


class QueryContact(BaseModel):
    id: Optional[int]
    name: Optional[str]
    fone: Optional[str]
    email: Optional[str]


class Contact(BaseModel):
    id: Optional[int] = Field(default_factory=lambda: next(c))
    name: str
    fone: str
    email: str


class Contacts(BaseModel):
    Contacts: list[Contact]
    count: int


@server.get('/Contacts')  # Rota, endpoint, recurso ...
@spec.validate(
    query=QueryContact,
    resp=Response(HTTP_200=Contacts)
)
def buscar_Contacts():
    """Retorna todas os Contatos da base de dados."""
    query = request.context.query.dict(exclude_none=True)
    all_Contacts = database.search(
        Query().fragment(query)
    )
    return jsonify(
        Contacts(
            Contacts=all_Contacts,
            count=len(all_Contacts)
        ).dict()
    )

@server.get('/Contacts/<int:id>')
@spec.validate(resp=Response(HTTP_200=Contact))
def buscar_Contact(id):
    """Retorna todos os Contatos, de acordo com o id pesquisado, da base de dados."""
    try:
        Contact = database.search(Query().id == id)[0]
    except IndexError:
        return {'message': 'Contact not found!'}, 404
    return jsonify(Contact)


@server.post('/Contacts')
@spec.validate(
    body=Request(Contact), resp=Response(HTTP_201=Contact)
)
def inserir_Contact():
    """Insere um Contato no banco de dados."""
    body = request.context.body.dict()
    database.insert(body)
    return jsonify(body)


@server.put('/Contacts/<int:id>')
@spec.validate(
    body=Request(Contact), resp=Response(HTTP_201=Contact)
)
def altera_Contact(id):
    """Altera um Contato no banco de dados."""
    Contact = Query()
    body = request.context.body.dict()
    database.update(body, Contact.id == id)
    return jsonify(body)


@server.delete('/Contacts/<int:id>')
@spec.validate(resp=Response('HTTP_204'))
def deleta_Contact(id):
    """Remove um Contato do banco de dados."""
    database.remove(Query().id == id)
    return jsonify({})

server.run()