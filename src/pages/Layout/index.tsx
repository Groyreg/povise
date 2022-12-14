import React, { ReactElement, useEffect } from 'react';
import { useTheme } from '@app/themes/context';

import { Wrapper } from './styles';

const Layout = (): ReactElement => {
  const { toggle } = useTheme();

  const onInit = (): void => {
    toggle();
  };

  useEffect(onInit, []);

  return <Wrapper>Layout Page</Wrapper>;
};

export default Layout;
