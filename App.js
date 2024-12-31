import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Nhập số điện thoại của bạn"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity
        style={[styles.button, phoneNumber ? styles.buttonEnabled : styles.buttonDisabled]}
        disabled={!phoneNumber}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80 ,
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    width: '100%',
  },
  label: {
    fontSize: 22,
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    marginBottom: 230,
    borderRadius: 5,
    width: '100%',
  },
  button: {
    padding: 15,
    borderRadius: 5,
    
    alignItems: 'center',
    width: '100%',
  },
  buttonEnabled: {
    backgroundColor: '#007BFF',
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
   
  },
});

export default PhoneNumberInput;
