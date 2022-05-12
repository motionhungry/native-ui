import { getStorybookUI } from '@storybook/react-native';
import { useFonts } from 'expo-font';

import './storybook.requires';

const Storybook = () => {
  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return getStorybookUI({})();
};

export default Storybook;
