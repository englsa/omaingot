import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from '../screens/auth/Order';
// import ThongBao from '../screens/auth/ThongBao';
// import CO from '../screens/auth/CO';


const Stack = createNativeStackNavigator();

export const OrderStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Order"
            screenOptions={{
                headerShown: false,
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                contentStyle:{
                    backgroundColor:"#fff"
                }
            }}
        >
            <Stack.Screen
                name="Order"
                component={Order}
            />
            {/* <Stack.Screen
            {/* <Stack.Screen
                name="ThongBao"
                component={ThongBao}
            /> */}
        </Stack.Navigator>
    );
}