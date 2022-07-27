import type { NextPage } from 'next';
import Head from 'next/head';
import Body from '../components/02. Body/01. Home/Body';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quack Goods</title>
      </Head>
      <Body />
    </>
  )
}

export default Home
