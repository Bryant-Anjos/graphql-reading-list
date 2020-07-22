import React from 'react'
import { useQuery } from '@apollo/client'

import { GET_BOOKS_QUERY } from '../../queries'
import { IBook } from '../../@types/book'

const BookList: React.FC = () => {
  const { loading, data } = useQuery<{ books: IBook[] }>(GET_BOOKS_QUERY)

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
