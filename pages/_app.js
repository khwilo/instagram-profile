import Head from 'next/head';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instagram profile</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
