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
- Rode `yarn install` para intalar as dependencias
- Rode `yarn dev` para iniciar o servidor

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

  - Response

          [
            {
              "id": "49b2d9dd-2896-4332-8571-f779a943e3d4",
              "userName": "williams25",
              "chat": true,
              "created_at": "2021-04-20T18:41:14.000Z",
              "updated_at": "2021-04-20T18:41:14.000Z"
            }
          ]
