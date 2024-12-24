import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID', // From Firebase console
// });

const GoogleLoginButton = ({onLoginSuccess}) => {
  //   const signIn = async () => {
  //     try {
  //       const userInfo = await GoogleSignin.signIn();
  //       onLoginSuccess(userInfo);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <View>
      <Button title="Sign in with Google" />
    </View>
  );
};

export default GoogleLoginButton;
