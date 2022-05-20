import {
  TabNavigationState,
  ParamListBase,
  TabRouterOptions,
  TabActionHelpers,
  TabRouter,
  useNavigationBuilder,
} from '@react-navigation/native';

import {
  TabNavigationOptions,
  TabNavigationEventMap,
  TabBarNavigatorProps,
} from '../types';
import { getScreenOptionsWithDefaults, createTabBarButtons } from './utils';

type UseTabBarNavigationBuilderProps = Pick<
  TabBarNavigatorProps,
  'children' | 'screenOptions' | 'initialRouteName'
>;

export const useTabBarNavigationBuilder = ({
  children,
  screenOptions,
  initialRouteName,
}: UseTabBarNavigationBuilderProps) => {
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder<
      TabNavigationState<ParamListBase>,
      TabRouterOptions,
      TabActionHelpers<ParamListBase>,
      TabNavigationOptions,
      TabNavigationEventMap
    >(TabRouter, {
      children,
      screenOptions: getScreenOptionsWithDefaults(screenOptions),
      initialRouteName,
    });

  const buttons = createTabBarButtons({ state, navigation, descriptors });

  return {
    buttons,
    state,
    navigation,
    descriptors,
    NavigationContent,
  };
};
