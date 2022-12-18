import React, { createContext, ReactElement, useEffect, useMemo } from 'react';
import useVK from '@app/services/useVK';
import { useTheme } from '@app/themes/context';
import Showcase from '@pages/Layout/components/Showcase';

import Navbar from './components/Navbar';
import { DEFAULT_CONTEXT } from './constants';
import { IAppContext } from './interfaces';
import { Wrapper } from './styles';

export const AppContext = createContext<IAppContext>(DEFAULT_CONTEXT);

const Layout = (): ReactElement => {
  const { authData, isLoading } = useVK();

  const { toggle } = useTheme();

  const onInit = (): void => {
    toggle();
  };

  const setContext = (): IAppContext => ({ authData, isAuthLoading: isLoading });

  const contextData = useMemo(setContext, [authData, isLoading]);

  useEffect(onInit, []);

  return (
    <AppContext.Provider value={contextData}>
      <Wrapper>
        <Navbar />
        <Showcase />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default Layout;
