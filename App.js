/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter some text here" />
      <View style={styles.bottom}>
        <Text>Pin me to the bottom of the screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    height: 56,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
