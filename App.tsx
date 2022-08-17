import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation';

const App = () => {
  return (
      <RootNavigator/>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
