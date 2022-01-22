import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme/default';
import { AuthProvider } from '../hooks/auth';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ioasys Books - Sua loja de livro</title>
        <meta name="title" content="ioasys Books - Sua loja de livros" />
        <meta name="description" content="ioasys Books - Sua loja de livros" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="ioasys Books - Sua loja de livros" />
        <meta
          property="og:description"
          content="ioasys Books - Sua loja de livros"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="shortcut icon" href="/pokeball.svg" /> */}
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
