import React, { ReactElement } from 'react';
import { SwitchProps } from 'antd';

import { SwitchImported } from './styles';

const Switch = (props: SwitchProps): ReactElement => <SwitchImported {...props} />;

export default Switch;
