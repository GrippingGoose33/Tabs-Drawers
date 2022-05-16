import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';

const Tab =createBottomTabNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Tab.Screen name = "Home" component={HomeScreen}/>
        <Tab.Screen name = "News" component={NewsScreen}/>
        <Tab.Screen name = "Settings" component={SettingsScreen}/>
      </.Navigator>
    </NavigationContainer>
  );
}
