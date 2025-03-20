import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


const CheckoutScreen = ({ navigation }) => {
    const [cardNumber, setCardNumber] = useState('5261     4141    0151     8472');
  const [cardHolder, setCardHolder] = useState('Christie Doe');
  const [expiryMonth, setExpiryMonth] = useState('06');
  const [expiryYear, setExpiryYear] = useState('2024');
  const [cvv, setCvv] = useState('915');

  return (
    <View style={styles.container}>
 <Image source={require('./assets/Rectangle 15.png') } style={styles.rectangle}/>

   <View style={styles.headerContainer}>
      <View style={[styles.header, { backgroundColor: '#F5F5F5' }]} />
      <Image source={require('./assets/Arrow 1.png')} style={styles.arrow} />
</View>


      {/* Title + Price */}
      <View style={styles.titleContainer}>
      

        <Text style={styles.title}>Checkout</Text>  
        <FontAwesome style={styles.iconCard} name="credit-card" size={24} color="black" />
        <View style={styles.priceContainer}>
          <Text style={styles.amount}>₹ 1,527</Text>
          <Text style={styles.subtext}>Including GST (18%)</Text>
        </View>
      </View>

      {/* Payment Options */}
      <View style={styles.paymentOptions}>
        <TouchableOpacity style={[styles.paymentButton, styles.selectedPayment]}>
        <Image source={require('./assets/card.png')} style={styles.iconCard2} />
          <Text style={styles.paymentText}>Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.paymentButton, styles.selectedPayment2]}>
        <Image source={require('./assets/Apple icon.png')} style={styles.apple} />
          <Text style={styles.paymentText2}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Card Details Form */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Card number</Text>
        <View style={styles.inputBox}>
          <TextInput value={cardNumber} style={styles.input} keyboardType="numeric" />
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png' }} style={styles.cardIcon} />
          <Image source={require('./assets/Card Icon.png')} style={styles.cardIcon2} />

        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cardholder name</Text>
        <TextInput value={cardHolder} style={styles.input} />
      </View>

      <View style={styles.row}>
        <View style={[styles.inputContainer, styles.smallInput]}>
          <Text style={styles.label}>Expiry date</Text>
          <View style={styles.row}>
            <TextInput value={expiryMonth} style={[styles.input, styles.expiryInput]} keyboardType="numeric" />
            <Text style={styles.separator}> / </Text>
            <TextInput value={expiryYear} style={[styles.input, styles.expiryInput]} keyboardType="numeric" />
          </View>
        </View>

        <View style={[styles.inputContainer, styles.smallInput]}>
          <Text style={styles.label}>CVV / CVC</Text>
          <View style={styles.inputBox}>
            <TextInput value={cvv} style={styles.input} keyboardType="numeric" />
            <Ionicons name="information-circle-outline" size={20} color="gray" />
          </View>
        </View>
      </View>

      {/* Info Text */}
      <Text style={styles.infoText}>
        We will send you an order details to your email after the successful payment
      </Text>

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('PaymentSuccess')}>
            <Ionicons name="lock-closed-outline" size={20} color="white" />
        <Text style={styles.payButtonText}> Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
};

const PaymentSuccessScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        {/* Nút quay lại */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View style={styles.headerContainer}>
      <View style={[styles.header, { backgroundColor: '#F5F5F5' }]} />
      <Image source={require('./assets/arrow.png')} style={styles.arrow} />
</View>
        </TouchableOpacity>
  
        {/* Ảnh minh họa */}
        <View style={styles.imageContainer}>
          <Image source={require('./assets/Group 167.png')} style={styles.image} />
        </View>
        
        {/* Tiêu đề */}
        <Text style={styles.Notification}>Payment Success, Yayy!</Text>
        
        {/* Mô tả */}
        <Text style={styles.description}>
          We will send order details and invoice in your contact no. and registered email
        </Text>
        
        {/* Nút Check Details */}
        <TouchableOpacity style={styles.checkDetailsButton}>
          <Text style={styles.checkDetailsText}>Check Details</Text>
          <Ionicons name="arrow-forward" size={18} color="#007AFF" />
        </TouchableOpacity>
        
        {/* Nút Download Invoice */}
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    );
  };
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFC',
  },
  rectangle: {
    width: '110%',
    position:'absolute',
    top:50
  },
  headerContainer: {
    position: 'relative',  // Định vị chứa phần tử con
    width: 100,  // Điều chỉnh tùy theo kích thước ảnh
    height: 50,  // Điều chỉnh tùy theo kích thước ảnh
    marginTop: 40,

  },
  
  header: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  
  arrow: {
    position: 'absolute',
    top: '25%',  // Canh giữa theo chiều dọc
    left: '10%', // Điều chỉnh vị trí bên trong rectangle
    width: 20,  // Điều chỉnh theo kích thước arrow
    height: 20,
    resizeMode: 'contain',
  },
  
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,   
   borderRadius: 30,
    height: 150,
  },    
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconCard: {
    position:'absolute',
    left:'27%',
  },
  iconCard2: {
    position:'absolute',
    left:'10%',
    width: 30,
    height: 20
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1AB65C',
  },
  subtext: {
    fontSize: 14,
    color: 'gray',
  },
  paymentOptions: {
    flexDirection: 'row',
    padding: 5,
    
   marginBottom: 50,
  },
  paymentButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 16,
    width: 170,
    height: 69
  },
  apple: {
    position: 'absolute',
    top: '50%',  // Canh giữa theo chiều dọc
    left: '15%', // Điều chỉnh vị trí bên trong rectangle
    resizeMode: 'contain',
  },
  selectedPayment: {
    backgroundColor: '#25D482',
    shadowColor: '#25D482',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  selectedPayment2: {
    backgroundColor: '#F8F8FB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4}, // Bóng đổ bên phải
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Android
  },
  paymentText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  paymentText2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,

  },
  inputContainer: {
    height:56,
    marginBottom: 25,
   
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputBox: {
   backgroundColor:'#F8F8F8',
    height:56,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F8F8FB',
    borderRadius: 16,
    paddingHorizontal: 10,
   
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    height: 56,  // Giữ nguyên chiều cao như ảnh
    backgroundColor: '#F6F7FB', // Màu nền xám nhạt hơn
    borderRadius: 12, 
    paddingHorizontal: 15, // Giúp nội dung không quá sát mép
  },
  cardIcon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
    position:'absolute',
    left: '70%'
  },
  cardIcon2:{
    position:'absolute',
    left: '90%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallInput: {
    flex: 1,
  },
  expiryInput: {
    textAlign: 'center',
    width: 40,
  },
  separator: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  infoText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    marginVertical: 10,
  },
  payButton: {
    flexDirection: 'row',
    height: 62,
    backgroundColor: '#25D482',
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: '10%',  // Canh giữa theo chiều dọc
    left: '10%'
  },
  imageContainer: {
    padding: 20,
    marginTop:150,
    alignItems:'center'
  },
  image: {
    
    resizeMode: 'contain',
  },
  Notification: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center'
  },
  description: {
    fontSize: 14,
    color: '#7D7D7D',
    textAlign: 'center',
    marginBottom: 20,
    width:280,
    alignSelf: 'center',
  },
  checkDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  checkDetailsText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 5,
  },
  downloadButton: {
    marginTop:50,
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    height:62
  },
  downloadText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

