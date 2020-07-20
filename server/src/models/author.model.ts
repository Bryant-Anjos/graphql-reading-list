import { Schema, model, Document } from 'mongoose'

interface Author extends Document {
  name: string
  genre: number
}

const authorSchema = new Schema({
  name: String,
  age: Number,
})

export default model<Author>('Author', authorSchema)
