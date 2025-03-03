import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {  NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(){
    return(
        <View style={styles.container}>

            <Image style={styles.avt} source={require('./assets/Ellipse 6.png')}/>
            <Image style={styles.hello} source={require('./assets/hello.png')}/>
            <Text style={styles.text}> Your Insights</Text>
            <Image style={styles.rectangle1} source={require('./assets/Rectangle1.png')}/>
            <Image style={styles.scan} source={require('./assets/Group 157.png')}/>
            <Text style={styles.textscan}>Scan New</Text>
            <Image style={styles.textscan2} source={require('./assets/Scanned 483.png')}/>
            <Image style={styles.rectangle2} source={require('./assets/Rectangle1.png')}/>
            <Image style={styles.Icon_Counterfeits} source={require('./assets/Rectangle 33.png')}/>
            <Image style={styles.Icon_Counterfeits2} source={require('./assets/iconframe.png')}/>
            <Image style={styles.Text_Counterfeits} source={require('./assets/Counterfeits.png')}/>
            <Image style={styles.Text_Counterfeits2} source={require('./assets/Counterfeited 32.png')}/>
            <Image style={styles.rectangle3} source={require('./assets/Rectangle1.png')}/>
            <Image style={styles.Icon_Checkout} source={require('./assets/Group 160.png')}/>
            <Image style={styles.Icon_Checkout2} source={require('./assets/Group 158.png')}/>
            <Image style={styles.Text_Checkout} source={require('./assets/Success.png')}/>
            <Image style={styles.Text_Checkout2} source={require('./assets/Checkouts 8.png')}/>
            <Image style={styles.rectangle4} source={require('./assets/Rectangle1.png')}/>
            <Image style={styles.Icon_Directory} source={require('./assets/Group 159.png')}/>
            <Image style={styles.Icon_Directory2} source={require('./assets/Group 151.png')}/>
            <Image style={styles.Text_Directory} source={require('./assets/Directory.png')}/>
            <Image style={styles.Text_Directory2} source={require('./assets/History 26.png')}/>
            <Text style={styles.Text_explore}>Explor More</Text> 
            <Image style={styles.Icon_Arrow} source={require('./assets/Arrow 2 (1).png')}/>
            <Image style={styles.image1} source={require('./assets/Rectangle 31.png')}/>
            <Image style={styles.image2} source={require('./assets/Rectangle 45.png')}/>
            <Image style={styles.image3} source={require('./assets/Rectangle 45-1.png')}/>
            <Image style={styles.rectangle5} source={require('./assets/Rectangle 3.png')}/>
            <Image style={styles.icon1} source={require('./assets/Rectangle 35.png')}/>
            <Image style={styles.icon1_1} source={require('./assets/Group 152.png')}/>
            <Image style={styles.icon2} source={require('./assets/Group 153.png')}/>
            <Image style={styles.icon3} source={require('./assets/Vector.png')}/>
            <Image style={styles.icon4} source={require('./assets/Group 154.png')}/>
            <Image style={styles.icon5} source={require('./assets/Group 161.png')}/>



        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        

    },
    avt: {
        position:'absolute',
      left: 308,
        top: 69,
        borderRadius: 15,   
    },
    hello: {
        position:'absolute',
        left: 23,
        top: 63,
    },
    text: {
        position:'absolute',
        top: 148,
        left: 23,
        fontSize: 18,
    },  
    rectangle1: {
        position:'absolute',
        top: 205,
        left: 20,
        borderRadius: 16,
    },
    scan: {
        position:'absolute',
        top: 241,
        left: 72,
        
    },
    textscan: {
        position:'absolute',
        top: 305,
        left: 63,
        fontSize: 16,
    },
    textscan2: {
        position:'absolute',
        top: 333,
        left: 67,
    },
    rectangle2: {
        position:'absolute',
        top: 205,
        left: 196,
        borderRadius: 16,
    },
    Icon_Counterfeits: {
        position:'absolute',
        top: 241,
        left: 247,
    },
    Icon_Counterfeits2: {
        position:'absolute',
        top: 256,
        left: 260,
    },
    Text_Counterfeits: {
        position:'absolute',
        top: 305,
        left: 228,
    },
    Text_Counterfeits2: {
        position:'absolute',
        top: 333,
        left: 233,
    },
    rectangle3: {
        position:'absolute',
        top: 396,
        left: 20,
        borderRadius: 16,
    },
    Icon_Checkout: {
        position:'absolute',
        top: 436,
        left: 72,
    },
    Icon_Checkout2: {
        position:'absolute',
        top: 450,
        left: 86,
    },
    Text_Checkout: {
        position:'absolute',
        top: 503,
        left: 67,
    },
    Text_Checkout2: {
        position:'absolute',
        top: 531,
        left: 69,
    },
    rectangle4: {
        position:'absolute',
        top: 396,
        left: 195,
        borderRadius: 16,
    },
    Icon_Directory: {
        position:'absolute',
        top: 436,
        left: 247,
    },
    Icon_Directory2: {
        position:'absolute',
        top: 451,
        left: 263,
    },
    Text_Directory: {
        position:'absolute',
        top: 503,
        left: 240,
    },
    Text_Directory2: {
        position:'absolute',
        top: 531,
        left: 250,
    },
    Text_explore:{
        position:'absolute',
        top: 604,
        left: 23,
        fontSize: 18,
    },
    Icon_Arrow: {
        position:'absolute',
        top: 619,
        left: 327,
    },
    image1: {
        position:'absolute',
        top: 661,
        left: 20,
    },
    image2: {
        position:'absolute',
        top: 661,
        left: 172,
    },
    image3: {
        position:'absolute',
        top: 661,
        left: 324,
    },
    rectangle5: {
        position:'absolute',
        top: 600,
       
    },
    icon1: {
        position:'absolute',
        top: 718,
        left: 27,
    },
    icon1_1: {
        position:'absolute',
        top: 731,
        left: 40,
    },
    icon2: {
        position:'absolute',
        top: 730,
        left: 105,
    },
    icon3: {
        position:'absolute',
        top: 728,
        left: 167,
    },
    icon4: {
        position:'absolute',
        top: 730,
        left: 242,
    },
    icon5: {
        position:'absolute',
        top: 729,
        left: 311,  
    },

});

export default HomeScreen;