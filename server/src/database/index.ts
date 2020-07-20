import mongoose from 'mongoose'

class Database {
  private mongoConnection: Promise<typeof mongoose>

  constructor() {
    this.mongo()
  }

  mongo() {
    if (process.env.MONGO_URL) {
      this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      })
    }
  }
}

export default new Database()
