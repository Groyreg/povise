import React, { ReactElement } from 'react';
import MyThemeProvider from '@app/themes';
import Layout from '@pages/Layout';

const App = (): ReactElement => (
  <MyThemeProvider>
    <Layout />
  </MyThemeProvider>
);

export default App;
