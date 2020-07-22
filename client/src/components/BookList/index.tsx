import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_BOOKS_QUERY } from '../../queries'
import { IBook } from '../../@types/book'

import BookDetails from '../BookDetails'

const BookList: React.FC = () => {
  const { loading, data } = useQuery<{ books: IBook[] }>(GET_BOOKS_QUERY)

  const [selected, setSelected] = useState<string | null>(null)

  if (loading) {
    return <div>Loading books...</div>
  }

  return (
    <div>
      <ul id="book-list">
        {data?.books.map(book => (
          <li key={book.id} onClick={() => setSelected(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      {selected && <BookDetails id={selected} />}
    </div>
  )
}

export default BookList
