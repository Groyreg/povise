import React, { createContext, ReactElement, useMemo } from 'react';
import useVK from '@app/services/useVK';
import Showcase from '@pages/Layout/components/Showcase';

import Navbar from './components/Navbar';
import { DEFAULT_CONTEXT } from './constants';
import { IAppContext } from './interfaces';
import { Wrapper } from './styles';

export const AppContext = createContext<IAppContext>(DEFAULT_CONTEXT);

const Layout = (): ReactElement => {
  const { authData, isAuthLoading, videoData, searchVideos, isVideoLoading } = useVK();

  const setContext = (): IAppContext => ({ authData, isAuthLoading });

  const contextData = useMemo(setContext, [authData, isAuthLoading]);

  return (
    <AppContext.Provider value={contextData}>
      <Wrapper>
        <Navbar searchVideos={searchVideos} />
        <Showcase isVideoLoading={isVideoLoading} videoData={videoData} />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default Layout;
