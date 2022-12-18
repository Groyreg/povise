import { IStyles } from '@app/themes/interfaces';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const breakpointOnlyMobile = ({ theme }: IStyles): string => theme.media.onlyMobile;

const setNameStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  color: ${theme.colors.text};
  font-size: 18px;
  margin: 0;
  padding: 0;

  @media ${breakpointOnlyMobile({ theme })} {
    display: none;
  }
`;

export const Name = styled.p(setNameStyles);

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
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
