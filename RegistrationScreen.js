import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../assets/appstyles';

export default function RegistrationScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
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
