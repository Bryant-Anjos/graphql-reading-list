import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} from 'graphql'
import { BookType } from './book.schema'
import { books } from './data'

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
        return books.filter(book => book.authorId === parent.id)
      },
    },
  }),
})
