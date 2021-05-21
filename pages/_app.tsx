// ok you have to import all css here, at least for now
import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { client } from 'init/client'

import '../styles/globals.scss'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
