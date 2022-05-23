import React from 'react';
import { Box, Title } from '@motionhungry-ui/components';
import { useTheme } from '@motionhungry-ui/hooks';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

import { TabDescriptorMap } from '../types';

type ContentViewProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: TabDescriptorMap;
};

export const ContentView = ({ state, descriptors }: ContentViewProps) => {
  const theme = useTheme();
  return (
    <>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        return (
          <Box
            key={route.key}
            display={state.index === index ? 'flex' : 'none'}
            flex={1}
            backgroundColor={theme.backgroundColor}
          >
            {options.showTitle && (
              <Title
                size={options.titleSize ?? 'large'}
                title={options.title ?? route.name}
              />
            )}
            {descriptors[route.key].render()}
          </Box>
        );
      })}
    </>
  );
};
