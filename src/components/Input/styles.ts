import { Input } from 'antd';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

// eslint-disable-next-line
const overrideInputStyles = (): FlattenSimpleInterpolation => css`
  &.ant-input-affix-wrapper-focused {
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;

    input {
      outline: none;
    }
  }

  background: transparent;
  border: none;
  border-radius: 0.5rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff;
  height: 2.7rem;

  input {
    background: transparent;
    border: none;
    color: #9baacf;
    font-family: inherit;
    font-size: 14px;
    padding-left: 5px;
    width: 100%;

    &::placeholder {
      color: #bec8e4;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: #9baacf !important;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export const OverrideInput = styled(Input)(overrideInputStyles);
