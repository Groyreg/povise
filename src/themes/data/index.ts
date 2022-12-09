import { IThemes } from '../interfaces';

import { dark, light } from './colors';
import { sizes } from './sizes';

export const THEME: IThemes = {
  dark: {
    colors: dark,
    sizes,
  },
  light: {
    colors: light,
    sizes,
  },
};
