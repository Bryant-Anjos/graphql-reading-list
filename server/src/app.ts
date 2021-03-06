import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'

import schema from './schema'

import './database'

class App {
  server: express.Express

  constructor() {
    this.server = express()

    this.middlewares()
  }

  middlewares() {
    this.server.use(cors())
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
