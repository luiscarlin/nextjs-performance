import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import client from '../apollo-client';
import Layout from '../components/Layout';
import '../scripts/wdyr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
