import { IAuthor } from './author'

export interface IBook {
  id: string
  name: string
  genre: string
  author: IAuthor
}

export interface IBookMutation {
  name: string
  genre: string
  authorId: string
}
