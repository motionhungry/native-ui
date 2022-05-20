import { TabNavigationOptions, TabBarNavigatorProps } from '../../types';

export const getScreenOptionsWithDefaults = (
  screenOptions: TabBarNavigatorProps['screenOptions']
): TabNavigationOptions => ({
  icon: 'help',
  showSafeArea: true,
  showTitle: true,
  titleSize: 'large',
  ...screenOptions,
});
