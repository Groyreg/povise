import { IStyles } from '@app/themes/interfaces';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const setWrapperStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  align-items: center;
  background-color: ${theme.colors.background};
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  padding: 30px 30px 30px 390px;
  width: 100%;
`;

export const Wrapper = styled.div(setWrapperStyles);
