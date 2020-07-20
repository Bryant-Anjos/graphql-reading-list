import { Schema, model, Document } from 'mongoose'

interface Book extends Document {
  name: string
  genre: string
  authorId: string
}

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
})

export default model<Book>('Book', bookSchema)
