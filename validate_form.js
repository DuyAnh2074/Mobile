import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Alert } from 'react-native';


export default function validate_form() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const validatePhoneNumber = (phone) => {
        // Biểu thức Regex kiểm tra số điện thoại Việt Nam  
        const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    
        if (phoneRegex.test(phone)) {
            setErrorMessage('Số điện thoại hợp lệ!');
            return true;
        } else {
          setErrorMessage( 'Số điện thoại không đúng định dạng. Vui lòng nhập lại.');
          return false;
        }
      };
      const handleContinue = () => {
    
        if (validatePhoneNumber(phoneNumber)) {
            Alert.alert('Thông báo', 'Số điện thoại hợp lệ!', [{ text: 'OK' }]);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##E0E0E0',
    padding: 40,
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
    marginTop: 240,
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