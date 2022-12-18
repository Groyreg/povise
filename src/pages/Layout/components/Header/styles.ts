import { IStyles } from '@app/themes/interfaces';
import styled from 'styled-components';

const breakpointOnlyMobile = ({ theme }: IStyles): string => theme.media.onlyMobile;

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

export const Name = styled.p`
  color: white;
  font-size: 18px;
  margin: 0;
  padding: 0;

  @media ${breakpointOnlyMobile} {
    display: none;
  }
`;

export const Block = styled.div`
  align-items: center;
  display: flex;
`;
