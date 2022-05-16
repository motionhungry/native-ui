import { color } from '../base';
import { BorderRadiusVariant } from '../base/radius';
import { SpaceVariant } from '../base/space';

export type TabBarConfig = {
  box: {
    backgroundColor: string;
    borderRadius: BorderRadiusVariant;
  };
  iconSize: number;
  iconPadding: SpaceVariant;
  tabState: {
    active: {
      iconColor: string;
    };
    inactive: {
      iconColor: string;
    };
  };
};

export const tabBarConfig: TabBarConfig = {
  box: {
    backgroundColor: color.shale[25],
    borderRadius: 'xlarge',
  },
  iconSize: 32,
  iconPadding: 1,
  tabState: {
    active: {
      iconColor: color.black[100],
    },
    inactive: {
      iconColor: color.shale[100],
    },
  },
};
