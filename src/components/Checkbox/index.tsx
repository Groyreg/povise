import React, { ReactElement } from 'react';
import { CheckboxProps } from 'antd';

import { CheckboxImported } from './styles';

const Checkbox = ({ children, ...checkboxProps }: CheckboxProps): ReactElement => (
  <CheckboxImported {...checkboxProps}>{children}</CheckboxImported>
);

export default Checkbox;
