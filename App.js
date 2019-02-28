/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NetInfo } from "react-native";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentWillMount() {
    // NetInfo.getConnectionInfo().then(connectionInfo => {
    //   console.warn("Connection type", connectionInfo.type);
    //   console.warn("Connection effective type", connectionInfo.effectiveType);
    // });

    NetInfo.getConnectionInfo().then((connectionInfo) => {
      console.warn(
        'Initial, type: ' +
          connectionInfo.type +
          ', effectiveType: ' +
          connectionInfo.effectiveType,
      );
    });
  }

   handleFirstConnectivityChange(connectionInfo) {
    console.warn(
      'First change, type: ' +
        connectionInfo.type +
        ', effectiveType: ' +
        connectionInfo.effectiveType,
    );
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange,
    );
  }


  render() {
    NetInfo.addEventListener('connectionChange', this.handleFirstConnectivityChange);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
