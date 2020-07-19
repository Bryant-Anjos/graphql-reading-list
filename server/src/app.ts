import express from 'express'
import { graphqlHTTP } from 'express-graphql'

import schema from './schema'

class App {
  server: express.Express

  constructor() {
    this.server = express()

    this.middlewares()
  }

  middlewares() {
    this.server.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true,
      }),
    )
  }
}

export default new App().server
