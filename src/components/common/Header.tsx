import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, StyleProp, TextStyle } from 'react-native';

import { Icons } from './icons/icons';
import { fontWeights, sizes } from '../sizings';
import { goback } from '../../navigation/service';
import { colors } from '../../ultils/themes';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import api from '../../ultils/lib/api';
import { useTranslation } from 'react-i18next';


interface IHeader {
  title?: string;
  style?: StyleProp<TextStyle>;
  navigateBack?: () => void;
  trangThai?: number;
  guiToKhai?: () => void;
}

export default function Header({ title, style, navigateBack, trangThai, guiToKhai }: IHeader) {

  const { t } = useTranslation()

 

  return (
    <View style={[styles.headerContainer, style]}>
      <TouchableOpacity onPress={navigateBack ? navigateBack : goback} style={styles.backButton}>
        <Image source={Icons.backIcon} style={styles.imgBackIcon} />
      </TouchableOpacity>
      {title && title.length > 0 && <Text style={styles.textHeader}>{title}</Text>}
      {
        trangThai == 1 && (
          <TouchableOpacity onPress={guiToKhai} style={styles.btnGui}>
            <FontAwesomeIcon size={20}  icon={faPaperPlane} color={colors.white} />
            <Text style={styles.txtGui} > {t('GUI_TO_KHAI')}</Text>
          </TouchableOpacity>
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: sizes.size_50,
    paddingHorizontal: sizes.size_40,
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
    padding: sizes.size_10,
  },
  textHeader: {
    fontSize: sizes.size_20,
    fontWeight: fontWeights.fontWeight_600,
    textAlign: "left",
    width: '100%',
    color: '#000',
  },
  btnGui:{
    position: "absolute",
    backgroundColor:colors.primary,
    color:colors.white,
    marginRight: 5,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 5,
    padding: 10,
    right: 5
  },
  txtGui:{
    fontSize: 16,
    color: colors.white,
  }
});
