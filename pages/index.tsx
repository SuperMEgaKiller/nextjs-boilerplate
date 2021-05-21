import Head from 'next/head'
import Image from 'next/image'

import { FunctionComponent } from 'react'

const Home: FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="weather-app.png" type="image/png" />
      </Head>
      <div>Next js</div>
      <div>test</div>
      <Image src="/next-js.svg" height={60} width={60} />
    </div>
  )
}

export default Home
