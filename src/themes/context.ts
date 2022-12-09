import { Context, createContext, useContext } from 'react';

import { IThemeToggle } from './interfaces';

export const ThemeToggleContext: Context<IThemeToggle> = createContext({
  toggle: () => {},
});

export const useTheme = (): IThemeToggle => useContext(ThemeToggleContext);
