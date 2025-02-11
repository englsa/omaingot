import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, StyleProp, TextStyle } from 'react-native';

import { Icons } from './icons/icons';
import { fontWeights, sizes } from '../sizings';
// import { goback } from '../../navigation/service';
import { colors } from '../../ultils/themes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import api from '../../ultils/lib/api';
// import { useTranslation } from 'react-i18next';


interface IHeader {
  title?: string;
  style?: StyleProp<TextStyle>;
  navigateBack?: () => void;
  trangThai?: number;
  guiToKhai?: () => void;
}

export default function CustomHeader({ title, style, navigateBack, trangThai, guiToKhai }: IHeader) {

  // const { t } = useTranslation()

 

  return (
    <View style={[styles.headerContainer, style]}>
      <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
        <Image source={Icons.backIcon} style={styles.imgBackIcon} />
      </TouchableOpacity>
      {title && title.length > 0 && <Text style={styles.textHeader}>{title}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: sizes.size_50,
    paddingHorizontal: sizes.size_50,
    backgroundColor: colors.white,
  },
  imgBackIcon: {
    width: sizes.size_25,
    height: sizes.size_25,
    resizeMode: 'contain',
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    padding: sizes.size_14,
  },
  textHeader: {
    fontSize: sizes.size_24,
    fontWeight: fontWeights.fontWeight_600,
    textAlign: 'center',
    width: '100%',
    color: colors.dark2,
  },
});

