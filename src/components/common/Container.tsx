import React, { Fragment } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import Header from './Header';
import { isIOS, sizes } from '../sizings';

interface IHeader {
  style?: StyleProp<ViewStyle> | undefined;
  title?: string | undefined;
}

interface IContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  header?: IHeader | undefined;
  navigateBack?: () => void;
  disableSafeView?: boolean;
}

const Container = ({ navigateBack, children, style, header, disableSafeView }: IContainerProps) => {
  const renderTitleHeader = () => {
    return (
      <>
        {header?.title && <Header navigateBack={navigateBack} {...header} />}
        <View style={[styles.view, style]}>{children}</View>
      </>
    );
  };
  const renderHeader = () => (
    <TouchableWithoutFeedback accessible={false}>
      {disableSafeView ? (
        renderTitleHeader()
      ) : (
        <SafeAreaView style={styles.safeAreaView}>{renderTitleHeader()}</SafeAreaView>
      )}
    </TouchableWithoutFeedback>
  );

  return (
    <Fragment>
      {isIOS ? (
        <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
          {renderHeader()}
        </KeyboardAvoidingView>
      ) : (
        renderHeader()
      )}
    </Fragment>
  );
};
const styles = StyleSheet.create({
  safeAreaView: { backgroundColor: "#fff", flex: 1 },
  view: { paddingHorizontal: sizes.size_15, paddingBottom: sizes.size_15 },
});

export default Container;
