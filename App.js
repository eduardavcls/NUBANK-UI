import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/screens/HomePage';
import { PixPage } from './src/screens/PixPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PixPage" component={PixPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
