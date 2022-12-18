import React, { ReactElement } from 'react';
import Input from '@components/Input';
import { normalizeSearchRequest } from '@utils/normalizeVideoData';
import { FormikValues, useFormik } from 'formik';

import Header from '../Header';

import { DEFAULT_FORM_VALUES } from './constants';
import { IForm, IProps } from './interfaces';
import { Container, Wrapper } from './styles';

const Navbar = ({ searchVideos }: IProps): ReactElement => {
  const onSubmit = (values: FormikValues): void => {
    searchVideos(normalizeSearchRequest(values as IForm));
  };

  const form = {
    initialValues: DEFAULT_FORM_VALUES,
    onSubmit,
  };

  const {
    values: { search },
    // values: { search, isAdult, sorting, shorter, longer },
    handleChange,
    handleSubmit,
  } = useFormik(form);

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit}>
        <Header />
        <Input
          id="search"
          name="search"
          onChange={handleChange}
          placeholder="input search text"
          style={{
            width: '100%',
          }}
          value={search}
        />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
