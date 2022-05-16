import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';

import { useTheme } from '@motionhungry-ui/hooks';
import { pegasusTheme } from '@motionhungry-ui/themes';
import {
  Box,
  Button,
  ListItem,
  SafeAreaView,
  TextInput,
  Title,
  Select,
} from '@motionhungry-ui/components';

const theme = pegasusTheme;

type Tank = { id: number; name: string };

const Playground = () => {
  const theme = useTheme();
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState<Tank | null>(null);
  const [showList, setShowList] = useState(false);

  const handleSelectTank = (tank: Tank) => {
    setValue3(tank);
    setShowList(false);
  };

  const data: Tank[] = [
    {
      id: 1,
      name: 'Great Glen IPA',
    },
    {
      id: 2,
      name: 'Holy Ale',
    },
    {
      id: 3,
      name: 'Honey Blonde',
    },
  ];

  if (showList) {
    return (
      <>
        <SafeAreaView backgroundColor={theme.backgroundColor} />
        <Title
          leftOnPress={() => {
            setShowList(false);
          }}
          leftLabel="Cancel"
          size="small"
          title="Keg Details"
        />
        <Box padding={3}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ListItem
                label={item.name}
                icon="checkmark-sharp"
                selected={value3 ? value3.id === item.id : false}
                onPress={() => { handleSelectTank(item) }}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
          ></FlatList>
        </Box>
      </>
    );
  }

  return (
    <>
      <SafeAreaView
        backgroundColor={theme.components.Title.large.box.backgroundColor}
      />
      <Title
        leftOnPress={() => {}}
        leftIcon="chevron-back"
        leftLabel="Back"
        rightOnPress={() => {}}
        rightIcon="notifications"
        size="medium"
        title="Keg Details"
      />
      <Box padding={3} flexGrow={1}>
        <TextInput
          label="Phone Number"
          mb={1.5}
          value={value1}
          setValue={setValue1}
        />
        <TextInput
          label="Phone Number"
          mb={1.5}
          value={value2}
          setValue={setValue2}
        />
        <Select
          label="Beer"
          value={value3 ? value3.name : ''}
          showList={showList}
          setShowList={setShowList}
          mb={3}
        />
        <Button size="large" label="Save Keg Filling" />
      </Box>
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
      <Playground />
    </ThemeProvider>
  );
};

export default AppRoot;
