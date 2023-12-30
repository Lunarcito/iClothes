import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from '../styles';

function LoginScreen({navigation, setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Se valida las credenciales del usuario
    // if (username === 'user' && password === 'password') {
      setIsAuthenticated(true);
      navigation.navigate('Home')
    // }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput style={styles.textInput}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button color='mediumseagreen' title="Login" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
