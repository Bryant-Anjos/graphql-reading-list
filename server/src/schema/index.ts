import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} from 'graphql'

import { BookType, Book } from './book.schema'
import { AuthorType, Author } from './author.schema'
import { books, authors } from './data'

interface RootQuery {
  book: Book
  books: Book[]
  author: Author
  authors: Author[]
}

const RootQueryType = new GraphQLObjectType<RootQuery>({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return books.find(book => book.id === args.id)
      },
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return authors.find(author => author.id === args.id)
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return books
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return authors
      },
    },
  },
})

export default new GraphQLSchema({
  query: RootQueryType,
})
