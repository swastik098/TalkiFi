import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import GoogleLoginButton from '../components/Auth/GoogleLoginButton';

const Login = ({navigation}) => {
  const handleLoginSuccess = userInfo => {
    console.log('User Info:', userInfo);
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <GoogleLoginButton onLoginSuccess={handleLoginSuccess} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Login;
