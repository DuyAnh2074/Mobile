import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {  NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function Homescreen(){
   return (
    <View style={styles.container}>
        <Text>Trang Chủ</Text>
    </View>
    
   );
} 

 function validate_form({navigation}){
    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const validatePhoneNumber = (phone) => {
        // Biểu thức Regex kiểm tra số điện thoại Việt Nam  
        const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    
        if (phoneRegex.test(phone)) {
        setErrorMessage('');
        return true;
        } else {
          setErrorMessage( 'Số điện thoại không đúng định dạng. Vui lòng nhập lại.');
          return false;
        }
      };
      const handleContinue = () => {
    
        if (validatePhoneNumber(phoneNumber)) {
            Alert.alert('Thông báo', 'Số điện thoại hợp lệ!', [{ text: 'OK' }]);
            navigation.navigate('HomeScreen')

        } else {
            Alert.alert('Thông báo', 'Số điện thoại không đúng định dạng. Vui lòng nhập lại.', [{ text: 'OK' }]);
        }
      };
  return (
    <View style={styles.container}>
      <Text style ={ styles.login}>Đăng Nhập</Text>
      <Text style ={ styles.dangnhap}> Nhập số điện thoại </Text>
      <Text style ={ styles.sodienthoai}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
       
    {errorMessage ? <Text  style={styles.errorText}>{errorMessage} </Text> : null }
     <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục </Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />        
    </View>
    
    

  );
}

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={validate_form} options={{ title: 'Đăng nhập' }} />
          <Stack.Screen name="HomeScreen" component={Homescreen} options={{ title: 'Trang chủ' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    alignItems:'center',
    justifyContent:'center',
  },
  login:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  dangnhap:{
    fontSize: 18,
    marginBottom: 20,
  },
  sodienthoai:{
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 160,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});