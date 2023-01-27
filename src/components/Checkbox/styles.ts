import { IStyles } from '@app/themes/interfaces';
import { Checkbox } from 'antd';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

// eslint-disable-next-line lint-local/custom-max-lines-per-function
const overrideCheckboxStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  align-items: center;
  display: flex;

  .ant-checkbox-inner {
    background: transparent;
    border: none;
    border-radius: 0.3rem;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem ${theme.colors.white};
    height: 1.3rem;
    width: 1.3rem;

    &::after {
      left: 30%;
    }
  }

  .ant-checkbox-checked {
    background: #6d5dfc;
    border-radius: 0.3rem;
    box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb, inset -0.2rem -0.2rem 1rem #8abdff;
    height: 1.3rem;
    width: 1.3rem;

    &::after {
      border: none;
    }
  }

  &:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-checked:not(.ant-checkbox-disabled) .ant-checkbox-inner {
    background-color: #5b0eeb;
    border-color: transparent;
  }

  span {
    color: ${theme.colors.text};

    &:last-child {
      padding-top: 0.4rem;
    }
  }
`;

export const CheckboxImported = styled(Checkbox)(overrideCheckboxStyles);
