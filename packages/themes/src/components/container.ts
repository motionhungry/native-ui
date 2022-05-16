import { SpaceVariant } from '../base/space';

export type ContainerConfig = {
  box: {
    paddingX: SpaceVariant;
  };
};

export const containerConfig: ContainerConfig = {
  box: {
    paddingX: 3,
  },
};
