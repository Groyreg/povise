import { IStyles } from '@app/themes/interfaces';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const setWrapperStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  align-items: stretch;
  background-color: ${theme.colors.background};
  display: flex;
  flex: 1;
  height: 100%;
  padding: 30px 30px 30px 390px;
`;

export const Wrapper = styled.div(setWrapperStyles);
