import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;
