import React from 'react';

import { Box, IconName } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { radius } from '@motionhungry-ui/themes';
import { useCallback } from 'react';

import { Fab } from '../Fab';
import { IconButton } from '../IconButton';
import { FabMask } from './components';

export type TabIndex = 0 | 1 | 2 | 3 | 4;

export type TabBarIconNames = [
  IconName,
  IconName,
  IconName,
  IconName,
  IconName
];

type TabBarProps = {
  activeIndex: TabIndex;
  icons: TabBarIconNames;
  onTabPress: (index: TabIndex) => void;
  variant: 'default' | 'fab';
};

const TabBar = ({
  activeIndex,
  icons,
  onTabPress,
  variant,
}: TabBarProps): JSX.Element => {
  const theme = useTheme();
  const {
    components: { TabBar: tabBarTheme },
  } = theme;

  const getIconColor = (index: TabIndex) =>
    useCallback(
      () =>
        index === activeIndex
          ? tabBarTheme.iconColor.active
          : tabBarTheme.iconColor.inactive,
      [activeIndex]
    );

  const borderRadius = radius[tabBarTheme.borderRadius];

  if (variant === 'fab') {
    return (
      <Box flexDirection="row">
        <Box
          backgroundColor={tabBarTheme.backgroundColor}
          borderTopLeftRadius={borderRadius}
          borderTopRightRadius={borderRadius}
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
          padding={2}
          marginTop={20}
        >
          <IconButton
            color={getIconColor(0)()}
            variant="tertiary"
            icon={icons[0]}
            onPress={() => {
              onTabPress(0);
            }}
          />
          <IconButton
            color={getIconColor(1)()}
            variant="tertiary"
            icon={icons[1]}
            onPress={() => {
              onTabPress(1);
            }}
          />
        </Box>
        <Box
          position="relative"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          width={76}
        >
          <FabMask color={tabBarTheme.backgroundColor} />
          <Box position="absolute" bottom={30}>
            <Fab icon={icons[2]} onPress={() => onTabPress(2)} />
          </Box>
        </Box>
        <Box
          backgroundColor={tabBarTheme.backgroundColor}
          borderTopLeftRadius={borderRadius}
          borderTopRightRadius={borderRadius}
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
          padding={2}
          marginTop={20}
        >
          <IconButton
            color={getIconColor(3)()}
            variant="tertiary"
            icon={icons[3]}
            onPress={() => {
              onTabPress(3);
            }}
          />
          <IconButton
            color={getIconColor(4)()}
            variant="tertiary"
            icon={icons[4]}
            onPress={() => {
              onTabPress(4);
            }}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      backgroundColor={tabBarTheme.backgroundColor}
      borderTopLeftRadius={radius[tabBarTheme.borderRadius]}
      borderTopRightRadius={radius[tabBarTheme.borderRadius]}
      justifyContent="space-between"
      flexDirection="row"
      padding={2}
    >
      {icons.map((icon, index) => {
        const iconColor = getIconColor(index as TabIndex)();
        return (
          <IconButton
            key={`tab-button-${index}`}
            color={iconColor}
            variant="tertiary"
            icon={icon}
            onPress={() => {
              onTabPress(index as TabIndex);
            }}
          />
        );
      })}
    </Box>
  );
};

TabBar.displayName = 'TabBar';

export { TabBar };
