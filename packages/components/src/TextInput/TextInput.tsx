import React, { useState } from 'react';
import { Box, TouchableOpacity } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { InputState, InputSize } from '@motionhungry-ui/themes';
import {
  TextInputProps as RNTextInputProps,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
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

import { Text } from '../Text';

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
  disabled?: boolean;
  error?: boolean;
  label: string;
  size?: InputSize;
  success?: boolean;
  value?: string;
  setValue: (val: string) => void;
} & MarginProps &
  Omit<RNTextInputProps, 'accessibilityRole'>;

const TextInput = ({
  disabled = false,
  error = false,
  label,
  size = 'large',
  success = false,
  value = '',
  setValue,
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
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  const marginProps = Object.fromEntries(
    Object.entries({
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
    }).filter(([key, value]) => !!value)
  );

  const getInputState = (): InputState => {
    if (error) return 'error';
    if (success) return 'success';
    if (disabled) return 'disabled';
    if (isFocused) return 'active';
    return 'inactive';
  };

  const handleChangeText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    setValue(e.nativeEvent.text);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    console.log('blur');
    setIsFocused(false);
  };

  const renderInactiveValue = () => {
    if (!!props.secureTextEntry) {
      return Array(value.length).fill('●').join('');
    }
    return value;
  };

  const {
    components: { Input: inputTheme, Text: textTheme },
  } = theme;

  const {
    box: boxState,
    labelColor,
    inputColor,
  } = inputTheme.state[getInputState()];

  const {
    box: boxSize,
    label: labelSize,
    input: inputSize,
    placeholder: placeHolderSize,
  } = inputTheme.size[size];

  const textInputTextSize = textTheme.variant[inputSize.size];
  const textInputFontFamily = textTheme.fontWeight[inputSize.fontWeight];

  /**
   * TODO: Android offset; move this logic into a util - talk to @kyleget
   * This is the equivalent of 'calc(${textInputTextSize} - 5px)'
   * But there were RN errors.
   */
  const lineHeightOffset = `${
    parseInt(textInputTextSize.lineHeight.replace('px', '')) - 3
  }px`;

  return (
    <TouchableOpacity onPress={!isFocused ? handleFocus : undefined}>
      <Box
        px={2.5}
        justifyContent="center"
        {...boxState}
        {...boxSize}
        {...marginProps}
      >
        <Text
          color={labelColor}
          size={isFocused || value ? labelSize.size : placeHolderSize.size}
          fontWeight={
            isFocused || value
              ? labelSize.fontWeight
              : placeHolderSize.fontWeight
          }
        >
          {label}
        </Text>
        {isFocused ? (
          <NativeTextInput
            autoFocus
            onBlur={handleBlur}
            onChange={handleChangeText}
            onFocus={handleFocus}
            color={inputColor}
            fontFamily={textInputFontFamily}
            {...textInputTextSize}
            lineHeight={lineHeightOffset}
            selectionColor={inputColor}
            value={value}
            {...props}
          />
        ) : (
          <>
            {!!value && (
              <Text color={inputColor} {...inputSize}>
                {renderInactiveValue()}
              </Text>
            )}
          </>
        )}
      </Box>
    </TouchableOpacity>
  );
};

TextInput.displayName = 'TextInput';

export { TextInput };
