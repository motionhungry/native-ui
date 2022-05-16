import React from 'react';
import { Box, BoxProps } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';

type ContainerProps = {
  children: React.ReactNode;
} & BoxProps;

const Container = ({ children, ...props }: ContainerProps): JSX.Element => {
  const theme = useTheme();
  const { box } = theme.components.Container;
  return (
    <Box {...box} {...props}>
      {children}
    </Box>
  );
};

Container.displayName = 'Container';

export { Container };
