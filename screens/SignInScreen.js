import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useAppContext } from '../components/AppProvider';

const SignInScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

        <Text style={styles.label}>Email ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email here!"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password here!"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>For got password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton} onPress={() => setIsLoggedIn(true)}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign in with</Text>

        <View style={styles.socialButtons}> 
          <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
            <Image source={require('../assets/Google.png')} style={styles.socialIcon} />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, {backgroundColor:'#3B5998'}]} onPress={() => {}}>
            <Image source={require('../assets/Facebook1.png')} style={styles.socialIcon} />
            <Text style={[styles.socialText, {color:'white'}]}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerText}>Not yet a member? <Text style={styles.signup}>Sign Up</Text></Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  label: { fontSize: 16, marginVertical: 5 },
  input: { borderWidth: 1, padding: 12, marginVertical: 10, borderRadius: 10, borderColor: '#ccc' },
  forgotPassword: { color: '#FFA500', alignSelf: 'flex-end', marginBottom: 20 },
  signInButton: { backgroundColor: '#FFA500', padding: 15, borderRadius: 10, alignItems: 'center' },
  signInButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  orText: { textAlign: 'center', marginVertical: 20 },
  socialButtons: { flexDirection: 'row', justifyContent: 'center', marginVertical: 20, },
  socialButton: {
    width: 190,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Căn giữa nội dung
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8, // Giảm khoảng cách logo và chữ
  },
  socialText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: { textAlign: 'center', marginTop: 20 },
  signup: { color: '#FFA500', fontWeight: 'bold' },
});

export default SignInScreen;
