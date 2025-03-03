    import React from 'react';
    import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity,TextInput } from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import { useEffect } from 'react';
    import { Button } from 'react-native-web';

    const Stack = createNativeStackNavigator();

        const SplashScreen = ({navigation}) => {
            useEffect(() => {
                const timer = setTimeout(() => {
                navigation.replace('Onboarding');
                }, 3000);
                return () => clearTimeout(timer);
            }, [navigation]);
            return(

                <View style={styles.splashScreen}>
                    <Image source={require('./assets/Group 1.png' )} style={styles.logo}/>
                </View>
            );
        };

        const OnboardingScreen = ({navigation}) => {
            return(
            <View style={styles.OnboardingSceen}>
                <Image source={require('./assets/8140 1.png')} style={styles.onboardingImage} />
                <Image source={require('./assets/Group.png' )} style={styles.logo2}/>
                <Text style={styles.title}>
            Welcome{'\n'}<Text style={styles.title}>to our store</Text> 
        </Text>
                <Text style = {styles.description}>Get your groceries in as fast as one hour</Text>
                <TouchableOpacity style={styles.buttonStart} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            );    
    };

        const SignInScreen = ({navigation}) => {
            return(
            <View style={styles.signIn}>
                <Image source={require('./assets/Mask Group.png')} style={styles.signInImage}/>
                <Text style={styles.title2}>Get your groceries{'\n'} with nectar</Text>
                <Image source={require('./assets/Rectangle 11.png')} style = {styles.logo3}></Image>
                <TouchableOpacity onPress={() => navigation.navigate('Number')}>
                <TextInput 
                    style={styles.input} 
                    placeholder="+880"  
                    placeholderTextColor="#777" // Màu placeholder
                    onFocus={() => navigation.navigate('Number')} // Điều hướng sang màn hình Number khi focus
/>

                </TouchableOpacity>
                <Text style={styles.connectText}>Or connect with social media</Text>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4285F4' }]}> 
            <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3B5998' }]}> 
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
            </View>
            );
        };
        const NumberScreen = ({ navigation }) => {
        return(
        <View style={styles.signIn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./assets/Frame.png')} style={styles.backArrow}/>
            </TouchableOpacity>
            <Text style={styles.title2}>Enter your mobile number</Text>
            <Text style={styles.mobileText}>Mobile Number </Text> 
            <Image source={require('./assets/Rectangle 11.png')} style = {styles.logo4}></Image>

            <TextInput placeholder="+880" style={styles.input} keyboardType="numeric" />
            <TouchableOpacity onPress={() => navigation.navigate('Verification')} style={styles.nextArrow}>
                <Image source={require('./assets/Group 6802.png')}/>
            </TouchableOpacity>
            </View>
        );
        };
        const VerificationScreen = ({navigation}) => (
            <View style={styles.signIn}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./assets/Frame.png')} style={styles.backArrow}/>
            </TouchableOpacity>
            <Text style={styles.title2}>Enter your 4-digit code</Text>
            <Text style={styles.mobileText}>Code </Text> 
            <TextInput placeholder="- - - -" style={styles.input} keyboardType="numeric" />
            <Text style={styles.resendText}>Resend Text</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Verification')} style={styles.nextArrow}>
                <Image source={require('./assets/Group 6802.png')}/>
            </TouchableOpacity>
            
            </View>
        );
        const Nectar = () => {
            return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="Number" component={NumberScreen} />
                <Stack.Screen name="Verification" component={VerificationScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            );
        };
        const styles = StyleSheet.create({
            
            splashScreen: {
                flex: 1,
                backgroundColor:'#53B175',
            },
            logo: {
                position:'absolute',
                top:413,
                left:73,
            },
            onboardingScreen: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            },
            onboardingImage: {
                width: '100%', 
                height: '100%', 
                resizeMode: 'cover', 
            },
            logo2: {
                position:'absolute',
                top:500 ,
                left: 182,
            },
            title: {
                position:'absolute',
                top:577,
                left: 80,
                fontSize: 48,
                marginVertical:10,
                color:'white',
                textAlign:'center',
                fontWeight:'600',
            },
            description: {
                fontSize: 16,
                marginBottom: 20,
                color: 'white',
                position:'absolute',
                top: 700,
                left: 60,
                
            },
            buttonStart:{
                position:'absolute',
                top: 740,
                left: 30,
                width: 353,
                height: 67,
                backgroundColor:'#6AC47E',
                padding: 15,
                borderRadius:20,
                alignItems:'center',
            },
            buttonText:{
                color: 'white',
                fontWeight:'bold',
            padding: 10,
            },
            signIn: { 
                flex: 1, 
                 alignItems:'center',
                justifyContent: 'flex-start', 
                backgroundColor:'white',
            },
            signInImage: {
                width: '100%',
                height: 400,
                resizeMode: 'cover',
                
            },
            title2: {
                textAlign:'left',
                alignSelf:'flex-start',
                fontSize: 26,
                fontWeight:'600',
                marginLeft: 20,
                marginTop: 40,
            },
            logo3: {
                position:'absolute',
                top: 518,
                left: 25,
            },
            logo4: {
                position:'absolute',
                top: 270,
                left: 25,
            },
            input: {
                width: 300,
                height: 50,
                borderColor: '#ccc',
                borderBottomWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 10,
                color: '#000',
                textAlign: 'left',
                fontSize: 18,
            },
            connectText: { 
                textAlign: 'center', 
                marginVertical: 50, 
                color: '#777', 
                fontSize:14,
            },
            socialButton: { 
                width:'80%',
                padding: 15,
                borderRadius: 10, 
                marginTop: 10, 
                alignItems: 'center' 
            },
            socialButtonText: { 
                color: 'white', 
                fontWeight: 'bold' 
            },
            backArrow: { 
                marginTop: 70,
                marginRight: 300,
                marginBottom: 40,
                alignSelf:'flex-start'
                },
            mobileText:{
                color: '#777', 
                fontSize:14,
                textAlign:'left',
                alignSelf:'flex-start',
                marginLeft: 20,
                marginTop: 40,
            },
            nextArrow: { 
                padding: 20,
                alignSelf: 'flex-end', 
                marginTop:  200,
            },
           
            resendText: { 
                position:'absolute',
                top: 550,
                left: 25,
                color: '#53B175', 
                fontSize: 18,
            },

    });
    

        export default Nectar;