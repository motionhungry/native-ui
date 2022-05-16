import React from 'react';
import { Box, IconName } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { radius } from '@motionhungry-ui/themes';

import { Fab } from '../Fab';
import { FabMask, TabButton } from './components';

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

  const borderRadius = radius[tabBarTheme.box.borderRadius];

  if (variant === 'fab') {
    return (
      <Box flexDirection="row">
        <Box
          backgroundColor={tabBarTheme.box.backgroundColor}
          borderTopLeftRadius={borderRadius}
          borderTopRightRadius={borderRadius}
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
          padding={2}
          marginTop={20}
        >
          <TabButton
            active={activeIndex === 0}
            icon={icons[0]}
            onPress={() => {
              onTabPress(0);
            }}
          />
          <TabButton
            active={activeIndex === 1}
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
          <FabMask color={tabBarTheme.box.backgroundColor} />
          <Box position="absolute" bottom={30}>
            <Fab icon={icons[2]} onPress={() => onTabPress(2)} />
          </Box>
        </Box>
        <Box
          backgroundColor={tabBarTheme.box.backgroundColor}
          borderTopLeftRadius={borderRadius}
          borderTopRightRadius={borderRadius}
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
          padding={2}
          marginTop={20}
        >
          <TabButton
            active={activeIndex === 3}
            icon={icons[3]}
            onPress={() => {
              onTabPress(3);
            }}
          />
          <TabButton
            active={activeIndex === 4}
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
      backgroundColor={tabBarTheme.box.backgroundColor}
      borderTopLeftRadius={radius[tabBarTheme.box.borderRadius]}
      borderTopRightRadius={radius[tabBarTheme.box.borderRadius]}
      justifyContent="space-between"
      flexDirection="row"
      padding={2}
    >
      {icons.map((icon, index) => {
        return (
          <TabButton
            key={`tab-button-${index}`}
            active={activeIndex === index}
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
