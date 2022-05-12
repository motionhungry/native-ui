import React, { ReactNode } from 'react';
import { Typography } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { TextSize, FontWeight } from '@motionhungry-ui/themes';

type TextProps = {
  color?: string;
  children: ReactNode;
  fontWeight?: FontWeight;
  size?: TextSize;
  textAlign?: 'left' | 'center' | 'right';
};

const Text = ({
  color,
  children,
  fontWeight = 'regular',
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
      <Typography />
      {children}
    </Typography>
  );
};

Text.displayName = 'Text';

export { Text };
