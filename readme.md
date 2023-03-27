
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

OBS:Esse readme ainda precisa ser alterado, está apenas com algumas info default

## Stack utilizada

**Front-end:** Angular, TailwindCSS

**Back-end:** Python, Flask, TinyDB


## Funcionalidades

- Temas dark e light
- Preview em tempo real
- Modo tela cheia
- Multiplataforma


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


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


## Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```
    
## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

