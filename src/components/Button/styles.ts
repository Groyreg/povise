import { IStyles } from '@app/themes/interfaces';
import { Button } from 'antd';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const overrideButtonStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  background-color: ${theme.colors.accent};
  color: black;
  min-width: 120px;

  &:not(:disabled):hover {
    background-color: ${theme.colors.dynamic};
  }
`;

export const ButtonImported = styled(Button)(overrideButtonStyles);
