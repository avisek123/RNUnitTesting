import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Login = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleLogin = () => {
    // login
    setEmail('');
    setName('');
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.centerBox}>
        <Text testID="login-text" style={styles.title}>
          Login
        </Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          value={name}
          onChangeText={txt => setName(txt)}
          testID="login-name-input"
          placeholder="Enter Your Name"
          style={styles.nameInput}
        />
        <TextInput
          value={email}
          onChangeText={txt => setEmail(txt)}
          testID="login-email-input"
          placeholder="Enter Your Email"
          style={styles.emailInput}
        />
        <View style={styles.btnWrapper}>
          <Button testID="login-btn" onPress={handleLogin} title="Log in" />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  centerBox: {
    marginHorizontal: 40,
    marginTop: '20%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  inputWrapper: {
    paddingHorizontal: 30,
    marginTop: '10%',
  },
  emailInput: {
    borderWidth: 1,
    marginTop: 30,
  },
  nameInput: {
    borderWidth: 1,
  },
  btnWrapper: {
    marginTop: 50,
  },
});
