import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'

import { BookType } from './book.schema'

const books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
]

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return books.find(book => book.id === args.id)
      },
    },
  },
})

export default new GraphQLSchema({
  query: RootQuery,
})
