import React from 'react';

import Svg, { Path } from 'react-native-svg';

export const FabMask = ({ color }: { color: string }) => (
  <Svg width={76} height={58} viewBox="0 0 76 58" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M76 0C76 20.9868 58.9868 38 38 38C17.0132 38 0 20.9868 0 0V38V58H76V38V0Z"
      fill={color}
    />
  </Svg>
);
