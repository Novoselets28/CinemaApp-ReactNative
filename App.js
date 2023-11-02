import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TicketScreen from './src/components/screens/TicketsScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import TabNavigator from './src/components/navigation/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="MyTickets" component={TicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
