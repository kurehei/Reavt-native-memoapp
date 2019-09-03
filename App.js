import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignupScreen from './src/screens/SignupScreen';
import Appbar from './src/components/Appbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <SignupScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
    flex: 1,
  },
});
