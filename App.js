import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SplashScreen from './screens/SplashScreen'
import SportsScreen from './screens/SportsScreen';
import CreateEvent from './screens/CreateEvent';
import Pitches from './screens/Pitches'
import StadiumDetail from './screens/StadiumDetail'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SportsScreen" component={SportsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateEvent" component={CreateEvent} options={{ headerShown: false }} />
      <Stack.Screen name="Pitches" component={Pitches} options={{ headerShown: false }} />
      <Stack.Screen name="StadiumDetail" component={StadiumDetail} options={{ headerShown: false }}/>
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
