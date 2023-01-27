import { ITheme } from '@app/themes/interfaces';
import { ButtonProps } from 'antd';

export interface IProps extends ButtonProps {
  isFullWidth?: boolean;
}

export interface IButtonStyles {
  $isFullWidth?: boolean;
  theme: ITheme;
}
