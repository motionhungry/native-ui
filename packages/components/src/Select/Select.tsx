import React from 'react';
import { Box, TouchableOpacity } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { InputState, InputSize } from '@motionhungry-ui/themes';
import { MarginProps } from 'styled-system';

import { Text } from '../Text';
import { Ionicons } from '@expo/vector-icons';

type SelectProps = {
  disabled?: boolean;
  error?: boolean;
  label: string;
  showList: boolean;
  setShowList: (show: boolean) => void;
  size?: InputSize;
  success?: boolean;
  value?: string;
} & MarginProps;

const Select = ({
  disabled = false,
  error = false,
  label,
  size = 'large',
  success = false,
  showList,
  setShowList,
  value = '',
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
}: SelectProps): JSX.Element => {
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
    if (showList) return 'active';
    return 'inactive';
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
    input: textInputSize,
    placeholder: placeHolderSize,
  } = inputTheme.size[size];

  const inputTextSize = textTheme.variant[textInputSize.size];

  return (
    <TouchableOpacity
      onPress={() => {
        setShowList(!showList);
      }}
    >
      <Box
        px={2.5}
        justifyContent="center"
        {...boxState}
        {...boxSize}
        {...marginProps}
      >
        <Box flexDirection="row" alignItems="center">
          <Box flex={1}>
            <Text
              color={labelColor}
              size={showList || value ? labelSize.size : placeHolderSize.size}
              fontWeight={
                showList || value
                  ? labelSize.fontWeight
                  : placeHolderSize.fontWeight
              }
            >
              {label}
            </Text>
            {(!!value || showList) && (
              <Text color={inputColor} {...inputTextSize}>
                {value}
              </Text>
            )}
          </Box>
          <Ionicons color={labelColor} size={24} name="chevron-down" />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

Select.displayName = 'Select';

export { Select };
