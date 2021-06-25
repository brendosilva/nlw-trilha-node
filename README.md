# NLW VALORIZA

Projeto criado no evento NLW 06 da Rocketseat

## Tecnologias

- Node
- Express
- Typescript
- Typeorm
- sqlite3
- JWT - json web token
- bcryptjs
- class transformer

## Execultando
### Comandos:

- npm install 
- npm run dev

## Rotas

- POST - /users - Criação de usuários.
- POST - /tags - Criação de tags, apenas para usuários admin.
- POST - /session - Pagina para autenticação do usuário.
- POST - /compliments - Criação de elogios.
- GET - /users/compliments/sender - Busca lista de Elogios que usuário enviou.
- GET - /users/compliments/receiver - Busca lista de Elogios recebidos. 
- GET - /tags - Retorna todas tags cadastradas.
- GET - /users - Retorna todos usuários cadastrados.
