import React from 'react'
import { ApolloProvider } from '@apollo/client'

import client from './config/apolo'

import BookList from './components/BookList'
import AddBook from './components/AddBook'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  )
}

export default App
