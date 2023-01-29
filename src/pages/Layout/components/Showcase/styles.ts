import { IStyles } from '@app/themes/interfaces';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const setWrapperStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  align-items: center;
  background-color: ${theme.colors.background};
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
  padding: 15px 0 80px;
  width: 100%;

  @media screen and (min-width: 769px) {
    padding: 30px 30px 30px 390px;
  }
`;

export const Wrapper = styled.div(setWrapperStyles);
