import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { withStyles, Text, Button, CheckBox, Radio, Toggle, Icon, Input, Datepicker } from 'react-native-ui-kitten';
import Slider from '@react-native-community/slider';
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />,
    };
  };

  state = { }

  render = () => <View>Hi Charath! This is the player working!!</View>;
  
}


AppRegistry.registerComponent('App', () => Blank);
