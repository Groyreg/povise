import React, { ReactElement } from 'react';

import { IProps } from './interfaces';
import { OverrideInput, Wrapper } from './styles';

const Input = (props: IProps): ReactElement => (
  <Wrapper>
    <OverrideInput allowClear={true} autoFocus={true} {...props} />
  </Wrapper>
);

export default Input;
