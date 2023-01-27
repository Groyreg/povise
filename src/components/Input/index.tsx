import React, { ReactElement } from 'react';

import { IProps } from './interfaces';
import { OverrideInput } from './styles';

const Input = (props: IProps): ReactElement => <OverrideInput allowClear={true} {...props} />;

export default Input;
