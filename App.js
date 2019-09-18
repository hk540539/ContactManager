import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

// imports

import HomeScreen from "./Screens/HomeScreen";
import EditContactsScreen from "./Screens/EditContactsScreen";
import CreateContactsScreen from "./Screens/CreateContactsScreen";
import ViewContactsScreen from "./Screens/ViewContactsScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
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
