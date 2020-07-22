import React, { useMemo } from 'react'
import { useQuery } from '@apollo/client'

import { GET_BOOK_QUERY } from '../../queries'
import { IBook } from '../../@types/book'

const BookDetails: React.FC<{ id: string }> = ({ id }: { id: string }) => {
  const { data, loading } = useQuery<{ book: IBook }, { id: string }>(
    GET_BOOK_QUERY,
    {
      variables: { id },
    },
  )

  const book = useMemo(() => data?.book, [data])

  if (loading) {
    return <div id="book-details">Loading book details...</div>
  }

  return (
    <div id="book-details">
      {book && (
        <>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul className="other-books">
            {book.author.books.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default BookDetails
