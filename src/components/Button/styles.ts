import { Button } from 'antd';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { IButtonStyles } from './interfaces';

const overrideButtonStyles = ({ $isFullWidth }: IButtonStyles): FlattenSimpleInterpolation => css`
  align-items: center;
  background: #6d5dfc;
  border-radius: 0.5rem;
  box-shadow: inset 0.2rem 0.2rem 1rem #8abdff, inset -0.2rem -0.2rem 1rem #5b0eeb, 0.3rem 0.3rem 0.6rem #c8d0e7,
    -0.2rem -0.2rem 0.5rem #ffffff;
  color: #e4ebf5;
  display: flex;
  height: 42px;
  justify-content: center;
  justify-self: center;
  transition: 0.3s ease;
  width: ${$isFullWidth ? '100%' : 'auto'};

  &:active {
    box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb, inset -0.2rem -0.2rem 1rem #8abdff;
  }

  &:not(:disabled):hover {
    background: #6d5dfc;
    box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb, inset -0.2rem -0.2rem 1rem #8abdff;
  }
`;

export const ButtonImported = styled(Button)<IButtonStyles>(overrideButtonStyles);
