import moment from "moment";
import { CURRENCY_FORMAT_REGEX, DATE_FORMAT, DATE_TIME_FORMAT } from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const numberFormat = (value: any) => {
    return value && value.toString().replace(CURRENCY_FORMAT_REGEX, '.');
  };

export const formatDate = (date: Date) => moment(date).format(DATE_FORMAT);

export const formatDateTime = (date: Date) => moment(date).format(DATE_TIME_FORMAT);

export const setLang = async (value: string) => {
  return AsyncStorage.setItem("LANG", value);
};