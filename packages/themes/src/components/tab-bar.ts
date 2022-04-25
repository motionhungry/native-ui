import { Color, color, ColorOpacity } from '../base/color';
import { BorderRadiusVariant } from '../base/radius';

export type ActiveIconButtonColor = ColorOpacity;
export type InactiveIconButtonColor = ColorOpacity;

export type TabBar = {
  backgroundColor: string;
  borderRadius: BorderRadiusVariant;
  iconColor: {
    active: keyof Color;
    inactive: keyof Color;
  };
  iconOpacity: {
    active: keyof ColorOpacity;
    inactive: keyof ColorOpacity;
  };
};

export const tabBar: TabBar = ({
  backgroundColor: color.concrete[100],
  borderRadius: 'large',
  iconColor: {
    active: 'secondary',
    inactive: 'shale',
  },
  iconOpacity: {
    active: 100,
    inactive: 100,
  },
});
