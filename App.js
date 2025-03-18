import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider, useAppContext } from './components/AppProvider';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ExpolerScreen from './screens/ExpolerScreen';
import AccountScreen from './screens/AccountScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Auth Stack: Chứa các màn hình Đăng nhập, Đăng ký, Quên mật khẩu
const AuthStack = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

// Main Tabs: Chứa các màn hình chính sau khi đăng nhập
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Explorer') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Account') {
          iconName = focused ? 'person' : 'person-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#FFA500',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen 
      name="Explorer" 
      component={ExpolerScreen} 
    
    />
    <Tab.Screen 
      name="Account" 
      component={AccountScreen} 
     
    />
  </Tab.Navigator>
);

// Điều hướng chính: Dựa vào trạng thái isLoggedIn
const AppNavigator = () => {
  const { isLoggedIn } = useAppContext();
  return isLoggedIn ? <MainTabs /> : <AuthStack />;
};

const App = () => (
  <AppProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </AppProvider>
);

export default App;
