
# Lista de contatos

Resolva os seguintes desafios usando Python no back-end e
Angular no front-end. Você ganha alguns pontos de bônus por usar os novos recursos do
EcmaScript, Unit Testing ou Docker.

1. Back-end da lista de contatos
Crie uma API REST com Python que armazenará pessoas e seus contatos. Uma pessoa pode
ter vários contatos, como telefone, e-mail ou whatsapp. A API deve permitir que você crie,
atualize, obtenha e exclua as pessoas e os contatos.

2. Interface da lista de contatos
Crie um aplicativo da Web que explore a API criada na segunda atribuição. Você é livre para
usar o que quiser para construir o frontend. O design UI/UX depende totalmente de você.

OBS: falta preencher a parte de documentação da api

## Stack utilizada

**Front-end:** Angular, TypeScript

**Back-end:** Python, Flask, TinyDB


## Funcionalidades

- Visualizar contatos
- Pesquisa de contato por id
- Adicionar novo contato
- Alterar informações do contato
- Deletar um contato


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/pedromotta462/Teste-Bravi-Full-Stack.git
```

Entre no diretório do projeto

```bash
  cd Teste-Bravi-Full-Stack
```
#### Rodando Angular App

Entre no front end e instale as dependências

```bash
  cd frontend/contactApp
```
```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```
#### Rodando API

Na pasta do projeto navegue até a pasta onde está a API

```bash
  cd backend
```

Instale as dependências

```bash
  pip install -r requirements.txt
```

Inicie o servidor

```bash
  uvicorn app:app --host 0.0.0.0 --port 5000
```
## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Referência

 - [Angular Documentation](https://angular.io/docs)
 - [Flask Documentation](https://flask.palletsprojects.com/en/2.2.x/)
 - [TinyDB Documentation](https://tinydb.readthedocs.io/en/latest/intro.html)
 - [Pydantic Documentation](https://docs.pydantic.dev/)
 - [Flask Pydantic Spec Details](https://pypi.org/project/flask-pydantic-spec/)
