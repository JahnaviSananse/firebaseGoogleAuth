import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { GoogleSignin } from '@react-native-community/google-signin';
GoogleSignin.configure({
  webClientId: '760062579138-oudss4368a234bq31e7fpipil56ae2hk.apps.googleusercontent.com',
});

import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
         <TouchableOpacity style={{width:'70%',height:'20%',backgroundColor:'white',top:300,alignSelf:'center'}} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>

            <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }}>
              Google Sign-In
            </Text>
         
        </TouchableOpacity>
       
        {/* <Button
          title="Google Sign-In"
          onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        /> */}

        {/* <TouchableOpacity onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
          <View style={{ width: '70%', height: '35%', backgroundColor: 'gray', alignSelf: 'center',top:600 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }}>
              Google Sign-In
            </Text>
          </View>
        </TouchableOpacity> */}
       
        <Header />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({





});

export default App;
