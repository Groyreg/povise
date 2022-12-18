import { ChangeEvent, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { InputProps } from 'antd';

export interface IProps extends InputProps {
  enterButton?: ReactNode;
  inputPrefixCls?: string;
  loading?: boolean;
  onSearch?: (
    value: string,
    event?: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>,
  ) => void;
}
