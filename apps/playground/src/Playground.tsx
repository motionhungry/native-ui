import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';

import { useTheme } from '@motionhungry-ui/hooks';
import { createFabTabBarNavigator } from '@motionhungry-ui/navigators';
import { pegasusTheme } from '@motionhungry-ui/themes';
import { Box, Text, Title } from '@motionhungry-ui/components';
import { getHeaderTitle } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = pegasusTheme;

const HomeScreen = () => (
  <Box flexGrow={1} alignItems="center" justifyContent="center">
    <Text>Home Screen</Text>
  </Box>
);

const OtherScreen = () => {
  const theme = useTheme();
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor={theme.backgroundColor}
    >
      <Text>Other Screen</Text>
    </Box>
  );
};

type MainParamList = {
  Home: undefined;
  Settings: undefined;
};

type ScanParamList = {
  Scan: undefined;
};

type RootStackParamList = {
  MainNavigator: undefined;
  ScanNavigator: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = createNativeStackNavigator<ScanParamList>();

const FabTabBar = createFabTabBarNavigator<MainParamList>();

type MainNavigatorProps = NativeStackScreenProps<RootStackParamList>;

const MainNavigator = ({ navigation }: MainNavigatorProps) => (
  <FabTabBar.Navigator
    fabIcon="scan"
    onFabPress={() => {
      navigation.navigate('ScanNavigator');
    }}
  >
    <FabTabBar.Screen
      name="Home"
      component={HomeScreen}
      options={{ icon: 'home' }}
    />
    <FabTabBar.Screen
      name="Settings"
      component={OtherScreen}
      options={{ icon: 'settings-outline' }}
    />
  </FabTabBar.Navigator>
);

type ScanNavigatorProps = NativeStackScreenProps<RootStackParamList>;

const ScanNavigator = ({ navigation }: ScanNavigatorProps) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return <Title size="large" title={title} />;
        },
      }}
    >
      <Stack.Screen name="Scan" component={OtherScreen} />
    </Stack.Navigator>
  );
};

const Playground = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Group>
      <RootStack.Screen name="MainNavigator" component={MainNavigator} />
    </RootStack.Group>
    <RootStack.Group screenOptions={{ presentation: 'modal' }}>
      <RootStack.Screen name="ScanNavigator" component={ScanNavigator} />
    </RootStack.Group>
  </RootStack.Navigator>
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
      <SafeAreaProvider>
        <NavigationContainer>
          <Playground />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default AppRoot;
