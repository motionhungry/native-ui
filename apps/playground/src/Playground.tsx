import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';

import { pegasusTheme } from '@motionhungry-ui/themes';
import { SafeAreaView, TextInput } from '@motionhungry-ui/components';

const theme = pegasusTheme;

const Playground = () => (
  <SafeAreaView>
    <TextInput label="Hello" value="Hi" setValue={() => {}} />
  </SafeAreaView>
);

const AppRoot = () => {
  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Playground />
    </ThemeProvider>
  );
};

export default AppRoot;
