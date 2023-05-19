import '@/styles/globals.css';
import Head from 'next/head';
import bg from '../assets/background-wave.svg';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Francisco Leiva</title>
      </Head>

      <Component {...pageProps} />

      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
          background: url(${bg.src}) no-repeat fixed;
          background-size: cover;
        }
      `}</style>
    </>
  );
}
