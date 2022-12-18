import React, { ReactElement } from 'react';

import { Wrapper } from './styles';

const Showcase = (): ReactElement => {
  const test = (): void => {
    console.log('sdsd');
  };

  return <Wrapper onClick={test}>showcase</Wrapper>;
};

export default Showcase;
