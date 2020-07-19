import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

import { AuthorType } from './author.schema'
import { authors } from './data'

export interface Book {
  id: string
  name: string
  genre: string
  authorId: string
}

export const BookType: GraphQLObjectType<Book> = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return authors.find(author => author.id === parent.authorId)
      },
    },
  }),
})
