import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ErrorScreen from '../screens/TicketsScreen';
import { View, StyleSheet } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import TicketsScreen from '../screens/TicketsScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
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
            tabBarIcon: ({focused, colour}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home-sharp' : 'home-outline';
                colour = focused && '#ffffff';
              } else if (route.name === 'MyTickets') {
                iconName = focused ? 'film' : 'film-outline';
                colour = focused && '#ffffff';
              }
              return (
                <>
                  <Ionic
                    name={iconName}
                    style={{marginBottom: 4}}
                    size={22}
                    color={colour ? colour : '#ffffff40'}
                  />
                  <Ionic
                    name="ellipse"
                    style={{display: colour ? 'flex' : 'none'}}
                    size={4}
                    color={colour ? colour : 'transparent'}
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
    )
};

const styles = StyleSheet.create({
    activeTabBackground: {
      backgroundColor: 'black',
      padding: 18,
      borderRadius: 10,
    },
  });

export default TabNavigator;
