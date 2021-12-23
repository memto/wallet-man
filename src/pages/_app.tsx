import Head from 'next/head'

import NavBar from '../components/navbar'

import '../scss/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar></NavBar>
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
