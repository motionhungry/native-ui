import { useTheme as useStyledTheme } from 'styled-components';

import { defaultTheme, Theme } from '@motionhungry-ui/themes';

export const useTheme = (): Theme =>
  (useStyledTheme() as Theme) ?? defaultTheme;
