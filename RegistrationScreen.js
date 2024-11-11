import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../assets/appstyles';

export default function RegistrationScreen() {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

    const handleRegister = () => {
    alert(
      `Registered with:\n
      Firstname: ${firstname}\n
      Surname: ${surname}\n
      Street: ${street}\n
      City: ${city}\n
      County: ${county}\n
      Username: ${username}\n
      Email: ${email}`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
            <TextInput
        style={styles.input}
        placeholder="Firstname"
        value={firstname}
        onChangeText={setFirstname}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Street"
        value={street}
        onChangeText={setStreet}
      />
      
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      
      <TextInput
        style={styles.input}
        placeholder="County"
        value={county}
        onChangeText={setCounty}
      />
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
