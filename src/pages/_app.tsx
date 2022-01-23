import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { AuthProvider } from '../hooks/auth';
import { theme } from '../styles/theme/default';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ioasys Books - Sua loja de livro</title>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="google" content="notranslate" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="title" content="ioasys Books - Sua loja de livros" />
        <meta name="description" content="ioasys Books - Sua loja de livros" />
        <meta name="author" content="Gabriel Teixeira" />
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="ioasys Books - Sua loja de livros" />
        <meta
          property="og:description"
          content="ioasys Books - Sua loja de livros"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
