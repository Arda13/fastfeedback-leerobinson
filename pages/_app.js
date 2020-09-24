import { Global, css } from '@emotion/core';
import { AuthProvider } from '@/lib/auth';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset></CSSReset>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behaviour: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      ></Global>
      {children}
    </>
  );
};
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
