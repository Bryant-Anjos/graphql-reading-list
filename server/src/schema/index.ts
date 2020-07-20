import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
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
        return BookSchema.findById(args.id)
      },
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return AuthorSchema.findById(args.id)
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return BookSchema.find()
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return AuthorSchema.find()
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
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        const author = new AuthorSchema({
          name: args.name,
          age: args.age,
        })
        return author.save()
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const book = new BookSchema({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        })
        return book.save()
      },
    },
  },
})

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation,
})
