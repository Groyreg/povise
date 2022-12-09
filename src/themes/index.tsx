import React, { ReactElement, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeToggleContext } from './context';
import { THEME } from './data';
import { IProvider, IThemes, IThemeToggle } from './interfaces';

const MyThemeProvider = ({ children }: IProvider): ReactElement => {
  const [themeMode, setThemeMode] = useState<keyof IThemes>('light');

  const toggle = (): void => {
    const mode = themeMode === 'light' ? 'dark' : 'light';

    setThemeMode(mode);
  };

  const updateData = (): IThemeToggle => ({
    toggle,
  });

  const data = useMemo(updateData, [themeMode, toggle]);

  return (
    <ThemeToggleContext.Provider value={data}>
      <ThemeProvider theme={THEME[themeMode]}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default MyThemeProvider;
