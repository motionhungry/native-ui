import React, { useRef, useState } from 'react';
import { Box } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { TextInputState, TextInputSize } from '@motionhungry-ui/themes';
import {
  TextInput as TTextInput,
  TextInputProps as RNTextInputProps,
  TouchableWithoutFeedback,
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
  size?: TextInputSize;
  success?: boolean;
  value?: string;
  setValue: (val: string) => void;
} & MarginProps &
  RNTextInputProps;

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
  const textInputRef = useRef<TTextInput>(null);
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

  const getInputState = (): TextInputState => {
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
    textInputRef.current?.focus();
  };

  const handleBlur = () => {
    console.log('blur');
    setIsFocused(false);
  };

  const {
    components: { TextInput: inputTheme, Text: textTheme },
  } = theme;

  const {
    box: boxState,
    labelColor,
    textInputColor,
  } = inputTheme.state[getInputState()];

  const {
    box: boxSize,
    label: labelSize,
    textInput: textInputSize,
    placeholder: placeHolderSize,
  } = inputTheme.size[size];

  const textInputTextSize = textTheme.variant[textInputSize.size];
  const textInputFontFamily = textTheme.fontWeight[textInputSize.fontWeight];

  /**
   * TODO: Android offset; move this logic into a util - talk to @kyleget
   * This is the equivalent of 'calc(${textInputTextSize} - 5px)'
   * But there were RN errors.
   */
  const lineHeightOffset = `${
    parseInt(textInputTextSize.lineHeight.replace('px', '')) - 3
  }px`;

  return (
    <TouchableWithoutFeedback onPress={!isFocused ? handleFocus : undefined}>
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
            ref={textInputRef}
            onBlur={handleBlur}
            onChange={handleChangeText}
            color={textInputColor}
            fontFamily={textInputFontFamily}
            {...textInputTextSize}
            lineHeight={lineHeightOffset}
            selectionColor={textInputColor}
            value={value}
            {...props}
          />
        ) : (
          <>{!!value && <Text {...textInputSize}>{value}</Text>}</>
        )}
      </Box>
    </TouchableWithoutFeedback>
  );
};

TextInput.displayName = 'TextInput';

export { TextInput };
