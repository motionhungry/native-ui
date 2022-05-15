import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';

import { defaultTheme, pegasusTheme } from '@motionhungry-ui/themes';
import { Box, Button, TextInput } from '@motionhungry-ui/components';

const theme = pegasusTheme;

const Playground = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  return (
    <>
      <TextInput
        label="Phone Number"
        mb={1.5}
        value={value1}
        setValue={setValue1}
        error
      />
      <TextInput
        label="Phone Number"
        mb={1.5}
        value={value2}
        setValue={setValue2}
        success
      />
      <Button size="large" leftIcon="scan" label="Button" />
    </>
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
