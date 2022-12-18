import { IStyles } from '@app/themes/interfaces';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const setWrapperStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  background-color: ${theme.colors.background};
  height: 100vh;
  left: 0;
  padding: 30px 0;
  position: fixed;
  top: 0;
  width: 360px;

  @media screen and (max-width: 450px) {
    top: -40px;
    border-radius: 12px 12px 0 0;
  }
`;

const setContainerStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  border-right: 1px solid ${theme.colors.secondary};
  height: 100%;
  padding: 0 30px;
  width: 100%;
`;

export const Wrapper = styled.div(setWrapperStyles);
export const Container = styled.div(setContainerStyles);
