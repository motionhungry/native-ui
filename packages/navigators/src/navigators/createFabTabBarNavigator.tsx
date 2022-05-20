import React from 'react';
import { TabBarButtonConfig } from '@motionhungry-ui/components';
import {
  createNavigatorFactory,
  ParamListBase,
  TabActions,
  TabActionHelpers,
  TabRouter,
  TabNavigationState,
  TabRouterOptions,
  useNavigationBuilder,
} from '@react-navigation/native';

import {
  FabTabBarNavigatorProps,
  TabNavigationEventMap,
  TabNavigationOptions,
} from '../types';

import { ContentView, TabBarView } from '../views';

const FabTabBarNavigator = ({
  initialRouteName,
  children,
  fabIcon,
  onFabPress,
  screenOptions = {},
}: FabTabBarNavigatorProps) => {
  const screenOptionsWithDefaults: TabNavigationOptions = {
    icon: 'help',
    showSafeArea: true,
    showTitle: true,
    titleSize: 'large',
    ...screenOptions,
  };

  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder<
      TabNavigationState<ParamListBase>,
      TabRouterOptions,
      TabActionHelpers<ParamListBase>,
      TabNavigationOptions,
      TabNavigationEventMap
    >(TabRouter, {
      children,
      screenOptions: screenOptionsWithDefaults,
      initialRouteName,
    });

  const buttons: TabBarButtonConfig[] = state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    return {
      icon: options.icon,
      onPress: () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
          data: { isAlreadyFocused: state.index === index },
        });

        if (!event.defaultPrevented) {
          navigation.dispatch({
            ...TabActions.jumpTo(route.name),
            target: state.key,
          });
        }
      },
    };
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
