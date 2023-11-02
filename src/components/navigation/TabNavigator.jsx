import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import TicketsScreen from '../screens/TicketsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1A1A23',
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          position: 'absolute',
          borderTopColor: 'transparent',
          elevation: 0,
          height: 54,
          overflow: 'hidden',
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            color = focused ? '#ffffff' : '#ffffff40';
          } else if (route.name === 'MyTickets') {
            iconName = focused ? 'film' : 'film-outline';
            color = focused ? '#ffffff' : '#ffffff40';
          }
          return (
            <>
              <Ionic
                name={iconName}
                style={{ marginBottom: 4 }}
                size={22}
                color={color}
              />
              <Ionic
                name="ellipse"
                style={{ display: focused ? 'flex' : 'none' }}
                size={4}
                color={color === '#ffffff' ? color : 'transparent'}
              />
            </>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="MyTickets"
        component={TicketsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
