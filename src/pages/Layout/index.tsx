import React, { ReactElement, useEffect } from 'react';
import useVK from '@app/services/useVK';
import { useTheme } from '@app/themes/context';

import { Wrapper } from './styles';

const Layout = (): ReactElement => {
  const { authData, isLoading } = useVK();
  console.log({ authData, isLoading });
  const { toggle } = useTheme();

  const onInit = (): void => {
    toggle();
  };

  useEffect(onInit, []);

  return <Wrapper>Layout Page</Wrapper>;
};

export default Layout;
