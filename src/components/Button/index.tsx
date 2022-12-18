import React, { ReactElement } from 'react';
import { ButtonProps } from 'antd';

import { ButtonImported } from './styles';

const Button = ({ children, type = 'primary', ...buttonProps }: ButtonProps): ReactElement => (
  <ButtonImported type={type} {...buttonProps}>
    {children}
  </ButtonImported>
);

export default Button;
