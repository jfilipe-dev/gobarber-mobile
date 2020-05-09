import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

import colors from '../styles/colors';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
