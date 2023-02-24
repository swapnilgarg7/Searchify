import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Searchify</title>
        <meta name="description" content="Searchify - the search engine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-blue-300 text-3xl">
        Hello world!
      </h1>


    </>
  )
}
