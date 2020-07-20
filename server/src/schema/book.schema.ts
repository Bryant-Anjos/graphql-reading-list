import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

import { AuthorType } from './author.schema'
import AuthorSchema from '../models/author.model'

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
        return AuthorSchema.findById(parent.authorId)
      },
    },
  }),
})
