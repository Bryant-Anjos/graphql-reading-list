import express from 'express'

class App {
  server: express.Express

  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {}

  routes() {}
}

export default new App().server
