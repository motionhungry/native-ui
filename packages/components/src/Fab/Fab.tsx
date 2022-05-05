import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@motionhungry-ui/hooks';

import { IconName, TouchableOpacity } from '@motionhungry-ui/core';

type FabProps = {
  icon: IconName;
  onPress: () => void;
};

export const Fab = ({ icon, onPress }: FabProps) => {
  const theme = useTheme();
  const {
    components: { Fab: fabTheme },
  } = theme;

  return (
    <TouchableOpacity
      alignItems="center"
      backgroundColor={theme.color[fabTheme.backgroundColor][100]}
      borderRadius={30}
      boxShadow={`0px 2px 2px ${fabTheme.shadowColor}`}
      height={60}
      justifyContent="center"
      onPress={onPress}
      width={60}
    >
      <Ionicons
        name={icon}
        size={32}
        color={fabTheme.iconColor}
      />
    </TouchableOpacity>
  );
};
