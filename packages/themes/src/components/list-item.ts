import { TextSize } from './text';
import { color } from '../base';
import { SpaceVariant } from '../base/space';

type ListItemState = 'default' | 'selected';

export type ListItemConfig = {
  box: {
    paddingX: SpaceVariant;
    paddingY: SpaceVariant;
  };
  labelSize: TextSize;
  iconSize: number;
  state: Record<
    ListItemState,
    {
      box: {
        backgroundColor?: string;
      };
      icon: {
        color: string;
      };
    }
  >;
};

export const listItemConfig: ListItemConfig = {
  box: {
    paddingX: 3,
    paddingY: 1,
  },
  labelSize: 'large',
  iconSize: 24,
  state: {
    default: {
      box: {},
      icon: {
        color: color.shale[50],
      },
    },
    selected: {
      box: {
        backgroundColor: color.shale[25],
      },
      icon: {
        color: color.shale[50],
      },
    },
  },
};
