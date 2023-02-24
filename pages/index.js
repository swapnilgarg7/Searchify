import Header from '../components/header'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-teal-100 h-screen">
      <Head>
        <title>Searchify</title>
        <meta name="description" content="Searchify - the search engine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}

      {/* Footer */}


    </div>
  )
}
