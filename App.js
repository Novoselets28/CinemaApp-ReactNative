import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/components/navigation/appNavigation';
import ErrorScreen from './src/components/screens/TicketsScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Error" component={ErrorScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

