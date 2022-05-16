import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { IconName, TouchableOpacity } from '@motionhungry-ui/core';
import { useTheme } from '@motionhungry-ui/hooks';
import { MarginProps } from 'styled-system';

import { Text } from '../Text';

type ListItemProps = {
  label: string;
  icon?: IconName;
  selected?: boolean;
  onPress: () => void;
} & MarginProps;

const ListItem = ({
  label,
  icon,
  selected = false,
  onPress,
}: ListItemProps): JSX.Element => {
  const theme = useTheme();
  const { box, labelSize, iconSize, state } = theme.components.ListItem;
  const { box: boxState, icon: iconState } =
    state[selected ? 'selected' : 'default'];
  return (
    <TouchableOpacity
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      onPress={onPress}
      {...boxState}
      {...box}
    >
      <Text size={labelSize}>{label}</Text>
      {icon && <Ionicons name={icon} size={iconSize} {...iconState} />}
    </TouchableOpacity>
  );
};

ListItem.displayName = 'ListItem';

export { ListItem };
