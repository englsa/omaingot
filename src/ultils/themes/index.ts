
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

import configureFonts from '../font';
import { Platform } from 'react-native';
interface CustomThemeColors {
  brown: string;
  secondary: string;
  white: string;
  black: string;
  grey: string;
  grey_2: string;
  grey3: string;
  darkGrey: string;
  lightGrey: string;
  borderColor: string;
  hoverColor: string;
  dark1: string;
  dark4: string;
  dark3: string;
  dark2: string;
  red: string;
  secondaryYellow: string;
  darkYellow: string;
  yellowMinus10: string;
  secondaryRed: string;
  secondaryRedMinus10: string;
  secondaryBlue: string;
  blueMinus10: string;
  secondaryOrange: string;
  orangeMinus10: string;
  secondaryLightGreen: string;
  lightGreenMinus10: string;
  secondaryCyan: string;
  cyanMinus10: string;
  backgroundIcon: string;
  secondaryGreenMedium: string;
  greenMediumMinus10: string;
  secondaryPurple: string;
  transparent: string;
  darkBackgroundTransparent: string;
  darkPurple: string;
  darkBlue: string;
  darkRed: string;
  primaryDark: string;
}

const customColor: CustomThemeColors = {
  brown: '#f3f3f3',
  secondary: '#414757',
  black: 'black',
  white: 'white',
  grey: '#646464',
  grey3: '#F3F5F9',
  dark1: '#717688',
  dark2: '#22253F',
  grey_2: '#717688',
  borderColor: '#eee',
  hoverColor: '#02884e10',
  darkGrey: '#9AA0B3',
  lightGrey: '#F2F3F7',
  dark3: '#E5E7EF',
  dark4: '#F2F3F7',
  red: '#C80000',
  backgroundIcon: '#ccc',
  secondaryYellow: '#F2D600',
  darkYellow: '#C99957',
  yellowMinus10: '#FEFBE6',
  secondaryRed: '#EB5A46',
  secondaryRedMinus10: '#FDEFED',
  secondaryBlue: '#0087FF',
  blueMinus10: '#E6F3FF',
  secondaryOrange: '#FF9F19',
  orangeMinus10: '#FFF5E8',
  secondaryLightGreen: '#50E898',
  lightGreenMinus10: '#EEFDF5',
  secondaryCyan: '#0279BF',
  cyanMinus10: '#E6F2F9',
  secondaryGreenMedium: '#60BD4F',
  greenMediumMinus10: '#EFF8ED',
  secondaryPurple: '#C376E0',
  transparent: 'transparent',
  darkBackgroundTransparent: '#00000099',
  darkPurple: '#840163',
  darkBlue: '#2B5799',
  darkRed: '#DC1E00',
  primaryDark: '#006D3E',
};

const colors = {
  ...DefaultTheme.colors,
  error: '#f13a59',
  primary: '#02884E',
  accent: '#02884E',
  info: '#0d6efd',
  background: '#fdfdfd',
  ...customColor,
};
const theme = {
  ...DefaultTheme,
  colors,
  // fonts: configureFonts(),
};


const generateBoxShadowStyle = (
  xOffset: any,
  yOffset: any,
  shadowColorIos: any,
  shadowOpacity: any,
  shadowRadius: any,
  elevation: any,
  shadowColorAndroid: any
) => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};
export { theme, colors, generateBoxShadowStyle };
