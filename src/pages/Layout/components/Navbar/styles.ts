import { IStyles } from '@app/themes/interfaces';
import ButtonImported from '@components/Button';
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
  border-right: 1px solid ${theme.colors.text};
  height: 100%;
  padding: 0 30px;
  width: 100%;
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

export const Wrapper = styled.div(setWrapperStyles);
export const Container = styled.div(setContainerStyles);
export const SearchForm = styled.form(setSearchFormStyles);
export const Text = styled.p(setTextStyles);
export const Checkboxes = styled.div(setCheckboxesStyles);
export const Button = styled(ButtonImported)(setButtonStyles);
export const Divider = styled.div(setDividerStyles);
