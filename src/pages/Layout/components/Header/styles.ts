import { IStyles } from '@app/themes/interfaces';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const setNameStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  color: ${theme.colors.text};
  font-size: 18px;
  margin: 0;
  padding: 0;
`;

export const Name = styled.p(setNameStyles);

export const Wrapper = styled.div`
  align-items: center;
  display: none;
  justify-content: space-between;
  margin-bottom: 16px;

  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

export const Avatar = styled.img`
  border-radius: 38%;
  height: 25px;
  margin-right: 8px;
  width: 25px;
`;

export const Block = styled.div`
  align-items: center;
  display: flex;
`;
