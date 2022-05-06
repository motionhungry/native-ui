import React from 'react';
import { Box, Text } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { TextInputProps as RNTextInputProps } from 'react-native';
import styled from 'styled-components/native';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  MarginProps,
} from 'styled-system';

type NativeTextInputProps = BorderProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

const NativeTextInput = styled.TextInput<NativeTextInputProps>`
  ${border}
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

type TextInputProps = {
  label?: string;
} & MarginProps &
  RNTextInputProps;

const TextInput = ({
  label,
  m,
  margin,
  mt,
  marginTop,
  mb,
  marginBottom,
  ml,
  marginLeft,
  mr,
  marginRight,
  my,
  marginY,
  mx,
  marginX,
  ...props
}: TextInputProps): JSX.Element => {
  const theme = useTheme();

  const marginProps = {
    m,
    margin,
    mt,
    marginTop,
    mb,
    marginBottom,
    ml,
    marginLeft,
    mr,
    marginRight,
    my,
    marginY,
    mx,
    marginX,
  };

  return (
    <Box {...marginProps}>
      {label && (
        <Text
          color={theme.components.TextInput.label.color}
          mb={0.5}
          {...theme.components.TextInput.label.typography}
        >
          {label}
        </Text>
      )}
      <NativeTextInput
        backgroundColor={theme.components.TextInput.backgroundColor}
        borderRadius={theme.components.TextInput.border.radius}
        borderWidth={theme.components.TextInput.border.width}
        borderColor={theme.components.TextInput.border.color}
        color={theme.components.TextInput.color}
        p={2}
        {...theme.components.TextInput.typography}
        {...props}
      />
    </Box>
  );
};

TextInput.displayName = 'TextInput';

export { TextInput };
