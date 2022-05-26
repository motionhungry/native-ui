import { Box } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import React from 'react';
import { MarginProps } from 'styled-system';

type ProgressBarProps = {
  backgroundColor?: string;
  progressColor?: string;
  progress: number;
} & MarginProps;

const ProgressBar = ({
  backgroundColor,
  progressColor,
  progress,
  ...props
}: ProgressBarProps): JSX.Element => {
  const theme = useTheme();
  const progressTheme = theme.components.ProgressBar;

  const { rounded, height } = progressTheme;
  const borderRadius = rounded
    ? `${parseInt(height.replace('px', '')) * 2}px`
    : undefined;

  const fixedProgress = (() => {
    if (progress < 0) return 0;
    if (progress > 100) return 100;
    return progress;
  })();

  const leftRadius =
    fixedProgress === 100
      ? { borderRadius }
      : {
          borderTopLeftRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
        };

  const rightRadius =
    fixedProgress === 0
      ? { borderRadius }
      : {
          borderTopRightRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        };

  return (
    <Box position="relative" {...props}>
      <Box
        height={height}
        width="100%"
        flexDirection="row"
        alignItems="stretch"
      >
        <Box
          flexBasis={`${fixedProgress}%`}
          backgroundColor={progressColor ?? progressTheme.progressColor}
          {...leftRadius}
        />
        <Box
          flex={1}
          flexBasis={`${100 - fixedProgress}%`}
          backgroundColor={backgroundColor ?? progressTheme.backgroundColor}
          {...rightRadius}
        />
      </Box>
    </Box>
  );
};

ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
