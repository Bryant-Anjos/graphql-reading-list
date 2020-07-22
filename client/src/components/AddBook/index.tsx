import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'

import {
  GET_AUTHORS_QUERY,
  ADD_BOOK_MUTATION,
  GET_BOOKS_QUERY,
} from '../../queries'
import { IAuthor, IBook, IBookMutation } from '../../@types'

const AddBook: React.FC = () => {
  const { loading, data } = useQuery<{ authors: IAuthor[] }>(GET_AUTHORS_QUERY)
  const [addBook] = useMutation<IBook, IBookMutation>(ADD_BOOK_MUTATION)

  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: GET_BOOKS_QUERY }],
    })
  }

  if (loading) {
    return <div>Loading Authors...</div>
  }

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Author:</label>
        <select value={authorId} onChange={e => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {data?.authors.map(author => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <button>+</button>
    </form>
  )
}

export default AddBook
