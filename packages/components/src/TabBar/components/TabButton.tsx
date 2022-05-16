import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, IconName } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';

type TabButtonProps = {
  active?: boolean;
  icon: IconName;
  onPress: () => void;
};

export const TabButton = ({
  active = false,
  icon,
  onPress,
}: TabButtonProps) => {
  const theme = useTheme();
  const {
    components: { TabBar: tabBarTheme },
  } = theme;

  const { iconColor } = tabBarTheme.tabState[active ? 'active' : 'inactive'];

  return (
    <TouchableOpacity onPress={onPress} padding={tabBarTheme.iconPadding}>
      <Ionicons name={icon} size={tabBarTheme.iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};
