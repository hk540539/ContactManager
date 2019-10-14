import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  Linking,
  Platform
} from "react-native";

import { Card, CardItem } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default class ViewContactsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "dummy",
      lname: "dummy",
      phone: "dummy",
      email: "dummy",
      address: "dummy",
      key: "dummy"
    };
  }
  static navigationOptions = {
    title: "View Contact"
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("willFocus", () => {
      var key = this.props.navigation.getParam("key", "");
    });
  }

  render() {
    return (
      <View>
        <Text> ViewContactsScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
