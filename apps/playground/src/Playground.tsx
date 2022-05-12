import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';

import { defaultTheme } from '@motionhungry-ui/themes';
import { Box, Button, Text } from '@motionhungry-ui/components';

const theme = defaultTheme;

const Playground = () => {
  return (
    <Button onPress={() => {}} label="Button" />
  );
};

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
      <Box margin={3} flex={1}>
        <SafeAreaView>
          <Playground />
        </SafeAreaView>
      </Box>
    </ThemeProvider>
  );
};

export default AppRoot;
