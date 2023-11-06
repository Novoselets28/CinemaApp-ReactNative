import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/navigation/TabNavigator';
import { TicketProvider } from './src/components/context/TicketContext';

const App = () => {
  return (
    <NavigationContainer>
      <TicketProvider>
        <TabNavigator />
      </TicketProvider>
    </NavigationContainer>
  );
}

export default App;
