import styled, { css } from 'styled-components/native';
import {
  border,
  boxShadow,
  color,
  display,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';
import type {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  DisplayProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export type BoxProps = BorderProps &
  BoxShadowProps &
  ColorProps &
  DisplayProps &
  PositionProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps;

export const boxStyles = css`
  ${border}
  ${boxShadow}
  ${color}
  ${display}
  ${position}
  ${flexbox}
  ${layout}
  ${space}
`;

export const Box = styled.View<BoxProps>`
  ${boxStyles}
`;
