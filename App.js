import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';
import {Platform} from "react-native";

const Tab =createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const { createNavigator} = Platform.select({
  ios: {createNavigator: Tab},
  android: {createNavigator: Drawer},
})

export default function App() {
  return (
    <NavigationContainer>
      <createNavigator.Navigator>
      <createNavigator.Screen name="Home" component={HomeScreen}/>
      <createNavigator.Screen name="News" component={NewsScreen}/>
      <createNavigator.Screen name="Settings" component={SettingsScreen}/>
      </createNavigator.Navigator>
    </NavigationContainer>
  );
}
