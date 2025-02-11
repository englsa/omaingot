/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {  } from 'react';
import AppNavigator from './src/navigation';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/common/toast/VBToast';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/ultils/themes';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './src/redux/store';
import { LogBox, StyleSheet } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
function App(): React.JSX.Element {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  return (
    <PaperProvider theme={theme} settings={{
      icon: props => <AwesomeIcon {...props} />,
    }}>
      <StoreProvider store={store}>
        <AppNavigator />
        <Toast config={toastConfig} />
      </StoreProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
