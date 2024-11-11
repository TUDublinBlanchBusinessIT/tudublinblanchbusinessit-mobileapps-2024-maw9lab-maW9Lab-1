import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../assets/appstyles';

export default function ColorPickerScreen() {
  const [selectedColor, setSelectedColor] = useState("Red");

  const [colorList] = useState(["Red", "Blue", "Green", "Yellow", "Purple"]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Your Favorite Color</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedColor}
        onValueChange={setSelectedColor}
      >
        {/* Use .map() to dynamically render Picker.Item */}
        {colorList.map((color, index) => (
          <Picker.Item key={index} label={color} value={color} />
        ))}
      </Picker>
      <Text style={styles.selectedColorText}>Selected Color: {selectedColor}</Text>
    </View>
  );
}
