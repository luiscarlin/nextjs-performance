import type { AppProps } from 'next/app';
import '../scripts/wdyr';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
