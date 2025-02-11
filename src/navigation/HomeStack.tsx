import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/auth/Home';
// import ThongBao from '../screens/auth/ThongBao';
// import CO from '../screens/auth/CO';


const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                contentStyle:{
                    backgroundColor:"#fff"
                }
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            {/* <Stack.Screen
            {/* <Stack.Screen
                name="ThongBao"
                component={ThongBao}
            /> */}
        </Stack.Navigator>
    );
}