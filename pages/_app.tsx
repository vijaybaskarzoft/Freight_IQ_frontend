/* eslint-disable react/react-in-jsx-scope */
// _app.tsx
// import '../styles/global.css';
import { FC, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from '../src/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      })
  );
  return (
    //<Provider store={store}>
    //<CoreApp>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        {/* <Auth /> */}
      </ThemeProvider>
    </QueryClientProvider>
    //</CoreApp>
    // </Provider>
  );
};

export default MyApp;
