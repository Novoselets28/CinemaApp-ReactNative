import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TicketScreen from './src/components/screens/TicketsScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import TabNavigator from './src/components/navigation/TabNavigator';
import MovieDetailsScreen from './src/components/screens/MovieDetailsScreen';
import SeatsScreen from './src/components/screens/SeatsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TicketScreen" component={TicketScreen} />
        <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
        <Stack.Screen name="SeatsScreen" component={SeatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
