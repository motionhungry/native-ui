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

type Props = BorderProps &
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

export const Typography = styled.Text<Props>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${textTransform}
  ${typography}
`;
