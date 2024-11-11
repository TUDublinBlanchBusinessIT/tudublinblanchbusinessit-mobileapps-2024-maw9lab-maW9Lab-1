import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../assets/appstyles';

export default function ColorPickerScreen() {
  const [selectedColor, setSelectedColor] = useState("Red");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Your Favorite Color</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedColor}
        onValueChange={setSelectedColor}
      >
        <Picker.Item label="Red" value="Red" />
        <Picker.Item label="Blue" value="Blue" />
      </Picker>
      <Text style={styles.selectedColorText}>Selected Color: {selectedColor}</Text>
    </View>
  );
}
