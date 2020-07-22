# Graphql Reading List

Project did following the [The Net Ninja's course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f) to study graphql.

## Techs used in the project

- Typescript
- Node.js
- Express
- ReactJS
- GraphQL
- MongoDB

## How to run the project

1. Clone this repo.
2. Go to the client and the server directories and in each of them install the dependencies with `npm install` or `yarn install` (Node.JS is required).
3. Rename the .env.example file to .env and add a MongoDB url to MONGO_URL variable.
4. In the server directory run `npm dev` or `yarn dev` and in the client folder run `npm start` or `yarn start`.
5. Is required to add some authors to the MongoDB database. You can do it using the addAuthor mutation in the `http://localhost:4000/graphql` url when running the server.
6. Open the application in `http://localhost:3000`.
