/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './Navigation/Router'

const App = () => {

  return (
    // <SafeAreaView >
    //   <StatusBar barStyle={'gray'} />
    <Navigation />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
