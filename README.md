# api-nlw

## 🚀 Tecnologias

- Express
- Typescript
- TypeORM
- Socket IO
- Sqlite3

## ✋🏻 Pré-requisitos

- Node.js
- Yarn

## 🔥 Instalação e execução

- Faça um clone desse repositório utilizando o camando `https://github.com/Williams25/api-nlw.git`
- Entre na pasta do projeto `cd api-nlw` e logo apos `code .`
- Rode `yarn` para instalar as dependencias
- Rode `yarn dev` para iniciar o servidor
- Apôs subir o servidor entre na rota `html/client.html` para ter acesso ao chat de cliente e para admin entre na rota `html/admin.html`

## :rocket: Rotas

### /settings

### POST

- Response `201`

  - Atributos (object)

    - chat: (boolean, required)
    - usuario: (string, required)

  - Body

          {
            "id": "49b2d9dd-2896-4332-8571-f779a943e3d4",
            "userName": "williams25",
            "chat": true,
            "created_at": "2021-04-20T18:41:14.000Z",
            "updated_at": "2021-04-20T18:41:14.000Z"
          }

### GET

- Response `200`

          [
            {
              "id": "49b2d9dd-2896-4332-8571-f779a943e3d4",
              "userName": "williams25",
              "chat": true,
              "created_at": "2021-04-20T18:41:14.000Z",
              "updated_at": "2021-04-20T18:41:14.000Z"
            }
          ]

### /users

### POST

- Response `201`

  - Atributos (object)

    - email: (string, required)

  - Body

          {
            "id": "ad4bb6ef-5ff0-4b99-87ba-1304c8aa1dbf",
            "email": "william007.gabriel@gmail.com",
            "created_at": "2021-04-21T19:39:17.000Z",
            "updated_at": "2021-04-21T19:39:17.000Z"
          }

### GET

- Response `200`

  - Params

    - user_id: (string, required)

  - Body

          {
            "id": "ad4bb6ef-5ff0-4b99-87ba-1304c8aa1dbf",
            "email": "william007.gabriel@gmail.com",
            "created_at": "2021-04-21T19:39:17.000Z",
            "updated_at": "2021-04-21T19:39:17.000Z"
          }

### /messages

### POST

- Response `201`

  - Atributos (object)

    - admin_id: (string)
    - user_id: (string, required)
    - text: (string, required)

  - Body

          {
            "id": "5631565e-f74f-4884-a0d3-53c3951516c4",
            "admin_id": null,
            "user_id": "49b2d9dd-2896-4332-8571-f779a943e3d4",
            "text": "preciso de ajuda",
            "created_at": "2021-04-21T20:45:09.000Z",
          }

### GET

- Response `200`

  - Params

    - user_id: (string, required)

  - Body

          [
            {
              "id": "5631565e-f74f-4884-a0d3-53c3951516c4",
              "admin_id": null,
              "user_id": "49b2d9dd-2896-4332-8571-f779a943e3d4",
              "text": "preciso de ajuda",
              "created_at": "2021-04-21T20:45:09.000Z",
            },
            {
              "id": "5631565e-f74f-4884-a0d3-53c3951516c4",
              "admin_id": "656545456-f74f-4884-a0d3-53c3951516c4",
              "user_id": "49b2d9dd-2896-4332-8571-f779a943e3d4",
              "text": "como posso ajudar",
              "created_at": "2021-04-21T20:45:09.000Z",
            }
          ]
