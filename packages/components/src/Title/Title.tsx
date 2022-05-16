import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Box, IconName, TouchableOpacity } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { TitleSize } from '@motionhungry-ui/themes';

import { Heading } from '../Heading';
import { Text } from '../Text';

type TitleProps = {
  size: TitleSize;
  leftIcon?: IconName;
  leftLabel?: string;
  leftOnPress?: () => void;
  rightIcon?: IconName;
  rightLabel?: string;
  rightOnPress?: () => void;
  title: string;
};

const Title = ({
  size,
  leftIcon,
  leftLabel,
  leftOnPress,
  rightIcon,
  rightLabel,
  rightOnPress,
  title,
}: TitleProps): JSX.Element => {
  const theme = useTheme();
  const { lineHeight } = theme.components.Text.variant[size];
  const { box, heading, icon, label } = theme.components.Title[size];

  const renderLeftCta = () => (
    <>
      {(leftIcon || leftLabel) && (
        <TouchableOpacity
          alignItems="center"
          flexDirection="row"
          onPress={leftOnPress}
        >
          {leftIcon && (
            <Box mr={1}>
              <Ionicons name={leftIcon} {...icon} />
            </Box>
          )}
          {leftLabel && <Text {...label}>{leftLabel}</Text>}
        </TouchableOpacity>
      )}
    </>
  );

  const renderRightCta = () => (
    <>
      {(rightIcon || rightLabel) && (
        <TouchableOpacity
          alignItems="center"
          flexDirection="row"
          onPress={rightOnPress}
        >
          {rightLabel && <Text {...label}>{rightLabel}</Text>}
          {rightIcon && (
            <Box ml={1}>
              <Ionicons name={rightIcon} {...icon} />
            </Box>
          )}
        </TouchableOpacity>
      )}
    </>
  );

  const getSmallHeadingOffset = () => (
    `${(parseInt(lineHeight.replace('px', '')) + 7) * -1}px`
  );

  return (
    <Box {...box}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        minHeight={lineHeight}
      >
        {renderLeftCta()}
        {renderRightCta()}
      </Box>
      {size === 'small' ? (
        <Box position="relative" top={getSmallHeadingOffset()} zIndex={-1}>
          <Heading {...heading}>{title}</Heading>
        </Box>
      ) : (
        <Heading {...heading}>{title}</Heading>
      )}
    </Box>
  );
};

Title.displayName = 'Title';

export { Title };
