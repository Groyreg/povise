import { IColors, ITheme } from '@app/themes/interfaces';

export interface IStyleCard {
  color?: keyof IColors;
  theme: ITheme;
  url?: string;
}
