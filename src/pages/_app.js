import '@/styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Francisco Leiva</title>
      </Head>

      <Navbar />

      <Component {...pageProps} />
    </>
  );
}
