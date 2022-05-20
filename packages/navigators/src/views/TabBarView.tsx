import React from 'react';
import { Box, TabBar, TabBarButtonConfig, TabBarFabConfig } from '@motionhungry-ui/components';
import { useTheme } from '@motionhungry-ui/hooks';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

type TabBarViewProps = {
  state: TabNavigationState<ParamListBase>;
  buttons: TabBarButtonConfig[];
  fab?: TabBarFabConfig;
};

export const TabBarView = ({
  state,
  buttons,
  fab
}: TabBarViewProps) => {
  const theme = useTheme();

  return (
    <Box backgroundColor={theme.backgroundColor}>
      <TabBar
        buttons={buttons}
        activeIndex={state.index}
        fab={fab}
      />
    </Box>
  );
};
