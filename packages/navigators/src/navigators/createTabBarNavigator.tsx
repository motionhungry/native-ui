import React from 'react';
import {
  createNavigatorFactory,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';

import {
  TabBarNavigatorProps,
  TabNavigationEventMap,
  TabNavigationOptions,
} from '../types';
import { useTabBarNavigationBuilder } from '../hooks';
import { ContentView, TabBarView } from '../views';

const TabBarNavigator = ({
  initialRouteName,
  children,
  screenOptions = {},
}: TabBarNavigatorProps) => {
  const { buttons, state, descriptors, NavigationContent } =
    useTabBarNavigationBuilder({
      children,
      screenOptions,
      initialRouteName,
    });

  return (
    <NavigationContent>
      <ContentView state={state} descriptors={descriptors} />
      <TabBarView
        state={state}
        buttons={buttons}
      />
    </NavigationContent>
  );
};

export const createTabBarNavigator = createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap,
  typeof TabBarNavigator
>(TabBarNavigator);
