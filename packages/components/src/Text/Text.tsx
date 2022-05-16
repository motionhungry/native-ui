import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { Typography } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { TextSize, FontWeight } from '@motionhungry-ui/themes';

type TextProps = {
  color?: string;
  children: RNTextProps['children'];
  fontWeight?: FontWeight;
  size?: TextSize;
  textAlign?: 'left' | 'center' | 'right';
};

const Text = ({
  color,
  children,
  fontWeight = 'normal',
  size = 'medium',
  textAlign = 'left',
}: TextProps): JSX.Element => {
  const theme = useTheme();
  const fontFamily = theme.components.Text.fontWeight[fontWeight];
  const color_ = color ?? theme.components.Text.defaultColor;
  return (
    <Typography
      alignItems="center"
      justifyContent="center"
      color={color_}
      fontFamily={fontFamily}
      textAlign={textAlign}
      {...theme.components.Text.variant[size]}
    >
      {children}
    </Typography>
  );
};

Text.displayName = 'Text';

export { Text };
