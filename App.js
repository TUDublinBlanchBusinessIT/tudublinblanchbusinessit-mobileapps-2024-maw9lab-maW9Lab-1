import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TextInput, Button,  StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './assets/appstyles';


// Create the Tab Navigator
const Tab = createMaterialTopTabNavigator();

// Registration Screen Component
function RegistrationScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');


  const handleRegister = () => {
    // Handle registration logic here
    alert(`Registered with username: ${username}, email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

// Color Picker Screen Component
function ColorPickerScreen() {
  const [selectedColor, setSelectedColor] = useState("Red");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Your Favorite Color</Text>
      <Picker style={styles.picker} selectedValue={selectedColor} onValueChange={setSelectedColor}>
          <Picker.Item label="Red" value="Red"/>
          <Picker.Item label="Blue" value="Blue"/>
      </Picker>
      <Text style={styles.selectedColorText}>Selected Color: {selectedColor}</Text>
    </View>
  );
}

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
