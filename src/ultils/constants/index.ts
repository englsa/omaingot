import { Dimensions, Platform, StatusBar } from "react-native";

export const CURRENCY_FORMAT_REGEX = /\B(?=(\d{3})+(?!\d))/g;

export const CURRENCY_PARSE_REGEX = /\$\s?|(,*)/g;

export const DATE_FORMAT: string = 'DD/MM/YYYY';

export const DATE_TIME_FORMAT: string = 'HH:mm:ss DD/MM/YYYY';

export enum LANG_TYPES {
    EN = 'en',
    VN = 'vn',
    CN = 'cn'
  }
  
  export enum LANG_NAMES {
    EN = 'English',
    VN = 'Tiếng Việt',
    CN = '简体中文'
  }
  
  export type ICONS_ENUM = 'VN' | 'EN' | 'CN';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

export const StatusBarHeight = Platform.select({
    ios: isIPhoneX() ? width * 0.25 : width * 0.053,
    android: 0,
    default: 0
})

export const checkHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
})

