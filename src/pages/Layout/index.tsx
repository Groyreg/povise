import React, { ReactElement, useEffect } from 'react';
import { useTheme } from '@app/themes/context';

const Layout = (): ReactElement => {
  const { toggle } = useTheme();

  const onInit = (): void => {
    toggle();
  };

  useEffect(onInit, []);

  return <div>Layout Page</div>;
};

export default Layout;
