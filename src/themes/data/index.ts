import { media } from '@app/themes/data/media';

import { IThemes } from '../interfaces';

import { dark, light } from './colors';
import { sizes } from './sizes';

export const THEME: IThemes = {
  dark: {
    colors: dark,
    media,
    sizes,
  },
  light: {
    colors: light,
    media,
    sizes,
  },
};
