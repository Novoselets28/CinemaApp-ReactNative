import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ErrorScreen from '../screens/ErrorScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Error" component={ErrorScreen} />
        </Tab.Navigator>
    )
};

export default TabNavigator;
