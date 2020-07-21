import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_BOOKS_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`

const BookList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY)

  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  )
}

export default BookList
