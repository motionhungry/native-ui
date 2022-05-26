import { palette } from '../base/color';
import { SpaceVariant } from '../base/space';
import { BorderRadiusVariant } from '../base/radius';

export type CardConfig = {
  padding: SpaceVariant;
  backgroundColor?: string;
  borderRadiusVariant?: BorderRadiusVariant;
  borderColor: string;
  borderWidth?: string;
};

export const cardConfig: CardConfig = {
  padding: 2,
  borderRadiusVariant: 'medium',
  borderColor: palette.grayscale[300],
  borderWidth: '1px',
};
