import { IStyles } from '@app/themes/interfaces';
import ButtonImported from '@components/Button';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { INavBarStyles } from './interfaces';

const setWrapperStyles = ({ theme, isOpenedInMobile }: IStyles & INavBarStyles): FlattenSimpleInterpolation => css`
  background-color: ${theme.colors.background};
  border-radius: 12px;
  box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff;
  padding: 20px 0;
  position: fixed;
  top: calc(100% - ${isOpenedInMobile ? '370px' : '75px'});
  transition: top 0.3s ease-out;
  width: 100%;

  @media screen and (min-width: 769px) {
    border-radius: 0;
    height: 100vh;
    left: 0;
    padding: 30px 0;
    top: 0;
    width: 360px;
  }
`;

const setContainerStyles = (): FlattenSimpleInterpolation => css`
  height: 100%;
  padding: 0 15px;
  width: 100%;

  @media screen and (min-width: 769px) {
    padding: 0 30px;
  }
`;

const setSearchFormStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  border-bottom: 1px solid ${theme.colors.text};
  margin-bottom: ${theme.sizes.xl};
  padding-bottom: ${theme.sizes.xl};
`;

const setTextStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  font-size: ${theme.sizes.xl};
  margin: 0;
`;

const setCheckboxesStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: ${theme.sizes.l};

  label {
    margin-bottom: 8px;
    margin-inline-start: 0 !important;

    &:last-child {
      margin: 0;
    }

    span {
      &:first-child {
        order: 2;
      }
    }
  }
`;

const setButtonStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  margin-top: ${theme.sizes.xl};
`;

const setDividerStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  margin-bottom: ${theme.sizes.xl};
`;

const setAdditionalContainerStyles = (): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;

  div {
    &:nth-child(1) {
      order: 2;
    }

    &:nth-child(2) {
      order: 1;
    }

    &:nth-child(3) {
      order: 0;
    }
  }

  @media screen and (min-width: 769px) {
    div {
      &:nth-child(1) {
        order: 0;
      }

      &:nth-child(2) {
        order: 1;
      }

      &:nth-child(3) {
        order: 2;
      }
    }
  }
`;

export const Wrapper = styled.div(setWrapperStyles);
export const Container = styled.div(setContainerStyles);
export const AdditionalContainer = styled.div(setAdditionalContainerStyles);
export const SearchForm = styled.form(setSearchFormStyles);
export const Text = styled.p(setTextStyles);
export const Checkboxes = styled.div(setCheckboxesStyles);
export const Button = styled(ButtonImported)(setButtonStyles);
export const Divider = styled.div(setDividerStyles);
