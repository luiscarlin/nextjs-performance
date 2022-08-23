import { ApolloProvider } from '@apollo/client';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
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

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
}

export default MyApp;
