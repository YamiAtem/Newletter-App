import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';

export default class App extends Component {
  render() {
    return(
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen
});

const AppContainer = createAppContainer(AppNavigator);