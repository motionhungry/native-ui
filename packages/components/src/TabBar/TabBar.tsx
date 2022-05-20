import React from 'react';
import { Box, IconName } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { radius } from '@motionhungry-ui/themes';

import { Fab } from '../Fab';
import { FabMask, TabButton } from './components';

export type TabBarButtonConfig = {
  icon: IconName;
  onPress: () => void;
};

export type TabBarFabConfig = {
  icon: IconName;
  onPress: () => void;
};

type TabBarProps = {
  activeIndex: number;
  buttons: TabBarButtonConfig[];
  fab?: TabBarFabConfig;
};

const TabBar = ({ activeIndex, buttons, fab }: TabBarProps): JSX.Element => {
  const theme = useTheme();
  const {
    components: { TabBar: tabBarTheme },
  } = theme;

  const borderRadius = radius[tabBarTheme.box.borderRadius];

  if (fab) {
    const half = Math.ceil(buttons.length / 2);
    const leftButtons = buttons.slice(0, half);
    const rightButtons = buttons.slice(half);
    return (
      <Box flexDirection="row">
        <Box
          backgroundColor={tabBarTheme.box.backgroundColor}
          borderTopLeftRadius={borderRadius}
          borderTopRightRadius={borderRadius}
          flex={1}
          flexDirection="row"
          justifyItems="center"
          justifyContent="space-around"
          padding={2}
          marginTop={20}
        >
          {leftButtons.map((button, index) => (
            <TabButton
              key={`tab-leftButtons-${index}`}
              active={activeIndex === index}
              icon={button.icon}
              onPress={button.onPress}
            />
          ))}
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
            <Fab icon={fab.icon} onPress={fab.onPress} />
          </Box>
        </Box>
        <Box
          backgroundColor={tabBarTheme.box.backgroundColor}
          borderTopLeftRadius={borderRadius}
          borderTopRightRadius={borderRadius}
          flex={1}
          flexDirection="row"
          justifyContent="space-around"
          padding={2}
          marginTop={20}
        >
          {rightButtons.map((button, index) => (
            <TabButton
              key={`tab-rightButtons-${index}`}
              active={activeIndex === half + index}
              icon={button.icon}
              onPress={button.onPress}
            />
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      backgroundColor={tabBarTheme.box.backgroundColor}
      borderTopLeftRadius={radius[tabBarTheme.box.borderRadius]}
      borderTopRightRadius={radius[tabBarTheme.box.borderRadius]}
      justifyContent="space-around"
      flexDirection="row"
      alignItems="center"
      padding={2}
    >
      {buttons.map((button, index) => (
        <TabButton
          key={`tab-button-${index}`}
          active={activeIndex === index}
          icon={button.icon}
          onPress={button.onPress}
        />
      ))}
    </Box>
  );
};

TabBar.displayName = 'TabBar';

export { TabBar };
