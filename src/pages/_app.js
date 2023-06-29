import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Francisco Leiva</title>
        <meta
          name='description'
          content="Hi, I'am Francisco! This is my portfolio, here you can find a brief description of me and you can see some of my projects"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
