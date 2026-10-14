import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { GlobalStyle } from '@/style/globalStyle';
import '@/style/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}