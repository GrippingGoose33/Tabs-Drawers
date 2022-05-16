import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';

const Tab =createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

    </NavigationContainer>
  );
}
