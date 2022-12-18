import { IStyles } from '@app/themes/interfaces';
import { Switch } from 'antd';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

const overrideSwitchStyles = ({ theme }: IStyles): FlattenSimpleInterpolation => css`
  background-color: ${theme.colors.background};
  position: relative;
`;

export const SwitchImported = styled(Switch)(overrideSwitchStyles);
