import styled from 'styled-components/native';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from 'styled-system';

type TextProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

const textTransform = system({
  textTransform: {
    property: 'textTransform',
  },
});

export const Text = styled.Text<TextProps>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${textTransform}
  ${typography}
`;
