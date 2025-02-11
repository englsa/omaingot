import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from '../screens/auth/Product';


const Stack = createNativeStackNavigator();

export const ProductStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Product"
            screenOptions={{
                headerShown: false,
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                contentStyle:{
                    backgroundColor:"#fff"
                }
            }}
        >
            <Stack.Screen
                name="Product"
                component={Product}
            />
            {/* <Stack.Screen
            {/* <Stack.Screen
                name="ThongBao"
                component={ThongBao}
            /> */}
        </Stack.Navigator>
    );
}