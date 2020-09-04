import React, { Component } from "react";
import { View, Image, ImageBackground } from "react-native";

export class Blank extends Component {
  render() {
    return (
      <View>Hi Charath! This is the player.</View>
    )
  }
}

AppRegistry.registerComponent('App', () => Blank);