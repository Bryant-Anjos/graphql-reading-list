import mongoose, { Mongoose } from 'mongoose'

class Database {
  private mongoConnection: Mongoose

  constructor() {
    this.mongo()
  }

  async mongo() {
    if (process.env.MONGO_URL) {
      this.mongoConnection = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      })
    }
  }
}

export default new Database()
