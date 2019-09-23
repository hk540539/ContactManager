import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class CreateContactsScreen extends Component {
  render() {
    return (
      <View>
        <Text> CreateContactsScreen </Text>
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
