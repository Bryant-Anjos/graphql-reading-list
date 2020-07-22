import { gql } from '@apollo/client'

export const GET_BOOKS_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`

export const ADD_BOOK_MUTATION = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`
