import { IconName } from '@motionhungry-ui/core';
import { TitleSize } from '@motionhungry-ui/themes';
import {
  DefaultNavigatorOptions,
  Descriptor,
  NavigationProp,
  NavigationHelpers,
  ParamListBase,
  RouteProp,
  TabActionHelpers,
  TabNavigationState,
  TabRouterOptions,
} from '@react-navigation/native';

type FabTabNavigationConfig = {
  fabIcon: IconName;
  onFabPress: () => void;
};

export type TabNavigationOptions = {
  icon?: IconName;
  showTitle?: boolean;
  title?: string;
  titleSize?: TitleSize;
};

export type TabNavigationEventMap = {
  tabPress: {
    data: { isAlreadyFocused: boolean };
    canPreventDefault: true;
  };
};

export type TabBarNavigatorProps = DefaultNavigatorOptions<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  Partial<TabNavigationOptions>,
  TabNavigationEventMap
> &
  TabRouterOptions;

export type FabTabBarNavigatorProps = TabBarNavigatorProps &
  FabTabNavigationConfig;

export type ContentViewProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
  NavigatorID extends string | undefined = undefined
> = NavigationProp<
  ParamList,
  RouteName,
  NavigatorID,
  TabNavigationState<ParamList>,
  TabNavigationOptions,
  TabNavigationEventMap
> &
  TabActionHelpers<ParamList>;

export type TabNavigationHelpers = NavigationHelpers<
  ParamListBase,
  TabNavigationEventMap
> &
  TabActionHelpers<ParamListBase>;

export type TabDescriptor = Descriptor<
  TabNavigationOptions,
  ContentViewProps<ParamListBase>,
  RouteProp<ParamListBase>
>;

export type TabDescriptorMap = Record<string, TabDescriptor>;
