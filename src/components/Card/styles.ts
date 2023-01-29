import { IColors } from '@app/themes/interfaces';
import styled from 'styled-components';

import { IStyleCard } from './intefaces';

const breakpointFromTablet = ({ theme }: IStyleCard): string => theme.media.tablet;
const setCircleColor = ({ theme, color }: IStyleCard): string => theme.colors[color as keyof IColors];
const setImageURL = ({ url }: IStyleCard): string | undefined => url;
const setColor = ({ theme }: IStyleCard): string => theme.colors.accent;

export const Link = styled.a`
  height: 300px;
  margin-bottom: 16px;
  min-width: 390px;
  transition: transform 250ms linear;
  width: 100%;

  @media ${breakpointFromTablet} {
    width: calc(33% - 14px);

    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const Text = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 4px 8px;

  span {
    color: white;
  }
`;

export const Wrapper = styled.div`
  background-image: url(${setImageURL});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;

  &:hover {
    ${Text} {
      display: none;
    }
  }

  @media ${breakpointFromTablet} {
    border-radius: 8px;
  }
`;

export const Circle = styled.div<IStyleCard>`
  background: ${setCircleColor};
  border-radius: 50%;
  height: 10px;
  margin-right: 8px;
  width: 10px;
`;

export const Description = styled.div`
  align-items: center;
  background-color: ${setColor};
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;

  span {
    color: white;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
`;
