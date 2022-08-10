import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/00. Global/global.css';
import '../styles/00. Global/cloudButton.css';
import '../styles/00. Global/cloudBG.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}