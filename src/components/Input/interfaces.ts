import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { InputProps } from 'antd';

export interface IProps extends InputProps {
  inputPrefixCls?: string;
  loading?: boolean;
  onSearch?: (
    value: string,
    event?: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>,
  ) => void;
}
