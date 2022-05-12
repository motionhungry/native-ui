import React, { ReactNode } from 'react';
import { Typography } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';

type HeadingProps = {
  size: 1 | 2 | 3 | 4;
  children: ReactNode;
};

const Heading = ({ size, children }: HeadingProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Typography {...theme.components.Heading[size]}>{children}</Typography>
  );
};

Heading.displayName = 'Heading';

export { Heading };
