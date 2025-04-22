import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import styles from './loginScreen.styles';

const LoginScreen: React.FC = () => {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
