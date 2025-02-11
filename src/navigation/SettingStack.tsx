import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/auth/Home';
import Setting from '../screens/auth/Setting';
// import ThongBao from '../screens/auth/ThongBao';
// import CO from '../screens/auth/CO';


const Stack = createNativeStackNavigator();

export const SettingStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Setting"
            screenOptions={{
                headerShown: false,
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                contentStyle:{
                    backgroundColor:"#fff"
                }
            }}
        >
            <Stack.Screen
                name="Setting"
                component={Setting}
            />
            {/* <Stack.Screen
            {/* <Stack.Screen
                name="ThongBao"
                component={ThongBao}
            /> */}
        </Stack.Navigator>
    );
}