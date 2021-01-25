import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import AppHeader from '../components/AppHeader'
import db from '../Config'

export default class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      likeCount: 0,
      dislikeCount: 0
    }
  }

  dislike = () => {
    var dislikeRep = db.ref("ratings/");

    this.setState({
      dislikeCount: this.state.dislikeCount +1
    });

    dislikeRep.update({
      dislike: this.state.dislikeCount
    });
  }

  like = () => {
    var like = db.ref("ratings/");

    this.setState({
      likeCount: this.state.likeCount + 1
    });

    like.update({
      like: this.state.likeCount
    });
  }

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

        <TouchableOpacity onPress={this.like}>
          <Image style={styles.image} source={require('../assets/thumbsup.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.dislike}>
          <Image style={styles.imageTwo} source={require('../assets/thumbsdown.png')} />
        </TouchableOpacity>

        <Text style={styles.ratingText}>Like: {this.state.likeCount}</Text>
        <Text style={styles.ratingText}>Dislike: {this.state.dislikeCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: "2.5%",
    marginLeft: "25%",
    marginRight: "25%",
    borderWidth: 2.5,
    borderColor: 'black',
    borderRadius: 15,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: "40%",
    marginTop: 50
  },
  imageTwo: {
    width: 50,
    height: 50,
    marginLeft: "55%",
    marginTop: -30,
  },
  ratingText: {
    marginTop:"-2.5%",
    marginLeft: "47.5%"
  }
});
