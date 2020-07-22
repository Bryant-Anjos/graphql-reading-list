import { IBook } from './book'

export interface IAuthor {
  id: string
  name: string
  age: number
  books: IBook[]
}
