import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from 'graphql'

import { BookType, Book } from './book.schema'
import { AuthorType, Author } from './author.schema'
import BookSchema from '../models/book.model'
import AuthorSchema from '../models/author.model'

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
        // return books.find(book => book.id === args.id)
      },
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        // return authors.find(author => author.id === args.id)
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        // return books
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        // return authors
      },
    },
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const author = new AuthorSchema({
          name: args.name,
          age: args.age,
        })
        return author.save()
      },
    },
  },
})

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation,
})
