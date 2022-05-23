import React from 'react';
import {
  createNavigatorFactory,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';

import {
  FabTabBarNavigatorProps,
  TabNavigationEventMap,
  TabNavigationOptions,
} from '../types';
import { useTabBarNavigationBuilder } from '../hooks';
import { ContentView, TabBarView } from '../views';

const FabTabBarNavigator = ({
  initialRouteName,
  children,
  fabIcon,
  onFabPress,
  screenOptions = {},
}: FabTabBarNavigatorProps) => {
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
        fab={{ icon: fabIcon, onPress: onFabPress }}
      />
    </NavigationContent>
  );
};

export const createFabTabBarNavigator = createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap,
  typeof FabTabBarNavigator
>(FabTabBarNavigator);
