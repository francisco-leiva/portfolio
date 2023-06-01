import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Francisco Leiva</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
