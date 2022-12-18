import { IStyles } from '@app/themes/interfaces';
import { Input } from 'antd';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const overrideInputStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  background-color: ${theme.colors.accent};
`;

export const OverrideInput = styled(Input.Search)(overrideInputStyles);
