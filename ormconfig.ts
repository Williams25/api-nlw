export default {
  // "type": "mysql",
  // "host": "localhost",
  // "username": "root",
  // "password": "root",
  // "database": "gerenciar_ferramentas",
  "type": 'sqlite',
  "database": './database.sqlite',
  "migrations": [
    "./src/migrations/**.ts"
  ],
  "entities": [
    "./src/models/**ts"
  ],
  "cli": {
    "migrationsDir": "./src/migrations"
  },
  "logging": true,
}