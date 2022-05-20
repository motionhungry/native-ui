import { TabBarButtonConfig } from '@motionhungry-ui/components';
import {
  ParamListBase,
  TabNavigationState,
  TabActions,
} from '@react-navigation/native';

import { TabDescriptorMap, TabNavigationHelpers } from '../../types';

type CreateTabBarButtonProps = {
  state: TabNavigationState<ParamListBase>;
  navigation: TabNavigationHelpers;
  descriptors: TabDescriptorMap;
};

export const createTabBarButtons = ({
  state,
  navigation,
  descriptors,
}: CreateTabBarButtonProps): TabBarButtonConfig[] =>
  state.routes.map((route, index) => {
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
