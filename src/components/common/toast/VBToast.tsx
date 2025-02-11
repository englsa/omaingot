
import React from 'react';
import { BaseToast, ToastConfig } from 'react-native-toast-message';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckSquare,faClose, faCircleExclamation, faInfoCircle  } from '@fortawesome/free-solid-svg-icons'
import { View } from 'react-native';
import { fontWeights, sizes } from '../sizings';
import { colors } from '../../../ultils/themes';

const text1Style = {
  fontSize: sizes.size_18,
  color: '#1E293B',
  fontWeight: fontWeights.fontWeight_600,
};

const text2Style = (text1: string | undefined) => ({
  fontSize: text1 ? sizes.size_15 : sizes.size_15,
  color: text1 ? '#475569' : '#1E293B',
  fontWeight: fontWeights.fontWeight_400,
});

export const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftWidth: 0, backgroundColor: '#A7F3D0' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={text1Style}
      text2Style={text2Style(props.text1)}
      text2NumberOfLines={2}
      renderLeadingIcon={() => (
        <View style={{ justifyContent: 'center', marginLeft: sizes.size_14 }}>
          <FontAwesomeIcon icon={faCheckSquare} size={sizes.size_21} color={colors.primary} />
        </View>
      )}
    />
  ),

  error: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftWidth: 0, backgroundColor: '#F9E7E5' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={text1Style}
      text2Style={text2Style(props.text1)}
      text2NumberOfLines={2}
      renderLeadingIcon={() => (
        <View style={{ justifyContent: 'center', marginLeft: sizes.size_14 }}>
          <FontAwesomeIcon icon={faCircleExclamation} size={sizes.size_21} color={"red"} />
        </View>
      )}
    />
  ),

  warning: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftWidth: 0, backgroundColor: '#FED7AA' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={text1Style}
      text2Style={text2Style(props.text1)}
      text2NumberOfLines={2}
      renderLeadingIcon={() => (
        <View style={{ justifyContent: 'center', marginLeft: sizes.size_14 }}>
          <FontAwesomeIcon icon={faCircleExclamation}  size={sizes.size_21} color={'#C2410C'} />
        </View>
      )}
    />
  ),

  info: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftWidth: 0, backgroundColor: '#BAE6FD' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={text1Style}
      text2Style={text2Style(props.text1)}  
      text2NumberOfLines={2}
      renderLeadingIcon={() => (
        <View style={{ justifyContent: 'center', marginLeft: sizes.size_14 }}>
          <FontAwesomeIcon icon={faInfoCircle} size={sizes.size_21} color={'#0369A1'} />
        </View>
      )}
    />
  ),
};
