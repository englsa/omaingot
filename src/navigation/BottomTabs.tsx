import React, { useCallback, useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faFolderOpen, faFileText, faUsersCog, faCar, faToriiGate, faProcedures, faTasks } from '@fortawesome/free-solid-svg-icons'
import { HomeStack } from './HomeStack'

import { colors } from '../ultils/themes';
import { Alert, AppState } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { OrderStack } from './OrderStack';
import { ProductStack } from './ProductStack';
import { SettingStack } from './SettingStack';
const Tab = createBottomTabNavigator();

export const BottomTabs = (props: any) => {
  const appState = useRef(AppState.currentState);
  const navigation: any = useNavigation();
  
  // const performAutoLogout = useCallback(() => {
  //   Alert.alert(t('DANG_NHAP_HET_HAN'), t('VUI_LONG_DANG_NHAP_LAI_DE_TIEP_TUC'), [
  //     {
  //       text: t('DONG_Y'),
  //       onPress: () => {
  //         navigation.navigate('LOGIN', {
  //           heThong: 1
  //         });
  //       },
  //     },
  //   ]);
  // }, []);

useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      const currentTime = new Date().valueOf();
      const lastActivetime = await AsyncStorage.getItem('inActiveTime');
      
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active' &&
        Math.abs(currentTime - (lastActivetime ? parseInt(lastActivetime) : 0)) > 60 * 30 * 1000
      ) {
        // performAutoLogout();
      } else {
        await AsyncStorage.setItem('inActiveTime', currentTime.valueOf().toString());
      }
  
      appState.current = nextAppState;
    });
  
    return () => {
      subscription.remove();
    };
  }, []);
  
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          // unmountOnBlur: true
          
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faTasks} color={color} size={size} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          // unmountOnBlur: true
        }}
      />
      
      <Tab.Screen
        name="ProductStack"
        component={ProductStack}
        options={{

          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faProcedures} color={color} size={size} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          // unmountOnBlur: true

        }}

      />
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{

          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUsersCog} color={color} size={size} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          // unmountOnBlur: true

        }}
      />
    </Tab.Navigator>
  );
};
