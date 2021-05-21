import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const uri = 'https://stage-syra-server.herokuapp.com/'

const httpLink = createHttpLink({ uri })
const authLink = setContext((_, { headers }) => {
  // lets store it in LS for now
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  ssrForceFetchDelay: 1000,
  ssrMode: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
