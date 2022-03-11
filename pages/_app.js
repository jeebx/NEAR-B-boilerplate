import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
    <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New Web3 App</title>
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
    );
};