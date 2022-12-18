import React, { ReactElement } from 'react';
import Input from '@components/Input';

import Header from '../Header';

import { Container, Wrapper } from './styles';

const Navbar = (): ReactElement => {
  const onSearch = (): void => {
    console.log('djjdd');
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        <Input
          onSearch={onSearch}
          placeholder="input search text"
          style={{
            width: '100%',
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
