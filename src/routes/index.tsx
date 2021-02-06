import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/welcome';
import Dashboard from '../screens/dashboard';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;