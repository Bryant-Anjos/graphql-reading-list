export interface IBook {
  id: string
  name: string
  genre: string
}

export interface IBookMutation {
  name: string
  genre: string
  authorId: string
}
