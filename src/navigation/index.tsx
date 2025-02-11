
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/unAuth/SplashScreen';
import Login from '../screens/unAuth/Login';
import { BottomTabs } from './BottomTabs';



const Stack = createNativeStackNavigator();

export const screenOptions = {
  contentStyle: {
    backgroundColor: "#000",
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={
        {
          contentStyle: {
            backgroundColor: "#fff"
          }
        }
      } >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }}
        />
        {/* <Stack.Screen name="REGISTER" component={Register} options={{
          headerShown: false,
        }}
        /> */}
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{
          headerShown: false,
        }}
        />
        {/* <Stack.Screen name="BPBottomTabs" component={BPBottomTabs} options={{
          headerShown: false,
        }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
