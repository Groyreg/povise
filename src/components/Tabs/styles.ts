import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { IStyles } from './interfaces';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff;
  display: flex;
  height: 3.5rem;
  justify-content: space-evenly;
  position: relative;
  width: 100%;

  input {
    display: none;
  }

  > input:checked + label {
    color: #6d5dfc;
    transition: all 0.5s ease;
  }
`;

const setTabStyles = ({ tabCount, isActive }: IStyles): FlattenSimpleInterpolation => css`
  align-items: center;
  color: ${isActive ? '#6d5dfc' : '#9baacf'};
  cursor: pointer;
  font-size: 1.4rem;
  height: 100%;
  padding: 14px 12px 12px;
  text-align: center;
  transition: all 0.5s ease;
  width: calc((100% / ${tabCount}) - 6px);

  &:hover {
    color: #6d5dfc;
  }
`;

const setActivePartStyles = ({ tabCount, activeElement = 1 }: IStyles): FlattenSimpleInterpolation => css`
  border-radius: 0.8rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #fff;
  height: 2.7rem;
  left: calc(5px + ${activeElement} * (100% - 6px) / 3);
  pointer-events: none;
  position: absolute;
  transition: left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: calc((100% / ${tabCount}) - 6px);
`;

export const Tab = styled.label<IStyles>(setTabStyles);
export const ActivePart = styled.label<IStyles>(setActivePartStyles);
