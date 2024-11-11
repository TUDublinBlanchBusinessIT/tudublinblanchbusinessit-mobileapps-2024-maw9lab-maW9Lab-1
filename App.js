import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RegistrationScreen from './components/RegistrationScreen';
import ColorPickerScreen from './components/ColorPickerScreen';

// Create the Tab Navigator
const Tab = createMaterialTopTabNavigator();

// Main App Component with Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Register" component={RegistrationScreen} />
        <Tab.Screen name="Favorite Color" component={ColorPickerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
