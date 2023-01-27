import React, { ReactElement } from 'react';

import { IProps } from './interfaces';
import { ButtonImported } from './styles';

const Button = ({ children, type = 'primary', isFullWidth, ...buttonProps }: IProps): ReactElement => (
  <ButtonImported $isFullWidth={isFullWidth} type={type} {...buttonProps}>
    {children}
  </ButtonImported>
);

export default Button;
