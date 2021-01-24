import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity style={styles.button}>
          <Text>Read a Joke</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Top News</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../assets/thumbsup.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.imageTwo} source={require('../assets/thumbsdown.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 25,
    marginLeft: 100,
    marginRight: 100,
    borderWidth: 2.5,
    borderColor: 'black',
    borderRadius: 15,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 75,
    marginTop: 50
  },
  imageTwo: {
    width: 50,
    height: 50,
    marginLeft: 175,
    marginTop: -30
  }
});
