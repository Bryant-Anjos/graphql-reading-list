import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

const client = new ApolloClient<NormalizedCacheObject>({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export default client
