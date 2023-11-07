import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import SeatsScreen from '../screens/SeatsScreen';
import TicketScreen from '../screens/TicketsScreen';
import MyTicketScreen from '../screens/MyTicketScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionic from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
      <Stack.Screen name="SeatsScreen" component={SeatsScreen} />
      <Stack.Screen name="TicketScreen" component={TicketScreen} />
    </Stack.Navigator>
)};

const MyTicketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyTicket" component={MyTicketScreen} />
    </Stack.Navigator>
)};

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
          height: 60,
          overflow: 'hidden',
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let iconSize = 22;
          let marginBottom = 4;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            color = focused ? '#ffffff' : '#ffffff40';
          } else if (route.name === 'MyTickets') {
            iconName = focused ? 'film' : 'film-outline';
            color = focused ? '#ffffff' : '#ffffff40';
          }

          return (
            <Ionic
              name={iconName}
              style={{ marginBottom, fontSize: iconSize, color }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="MyTickets" component={MyTicketStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
