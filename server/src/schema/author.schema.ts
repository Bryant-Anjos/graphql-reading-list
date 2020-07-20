import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} from 'graphql'

import { BookType } from './book.schema'
import BookSchema from '../models/book.model'

export interface Author {
  id: string
  name: string
  age: number
}

export const AuthorType: GraphQLObjectType<Author> = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return BookSchema.find({ authorId: parent.id })
      },
    },
  }),
})
