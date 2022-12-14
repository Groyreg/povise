import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MyThemeProvider from '@app/themes';
import Layout from '@pages/Layout';

import GlobalStyle from './GlobalStyle';

const queryClient = new QueryClient();

const App = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <MyThemeProvider>
      <GlobalStyle />
      <Layout />
    </MyThemeProvider>
  </QueryClientProvider>
);

export default App;
