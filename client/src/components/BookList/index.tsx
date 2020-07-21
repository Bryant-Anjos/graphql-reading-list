import React from 'react'
import { useQuery, gql } from '@apollo/client'

interface Book {
  id: string
  name: string
  genre: string
}

const GET_BOOKS_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`

const BookList: React.FC = () => {
  const { loading, data } = useQuery<{ books: Book[] }>(GET_BOOKS_QUERY)

  if (loading) {
    return <div>Loading books...</div>
  }

  return (
    <div>
      <ul id="book-list">
        {data?.books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
