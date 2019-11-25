import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from "react-native";

class HomeScreen extends Component {
  state = {};

  static navigationOptions = {
    title: "Machine Management System",
    headerStyle: {
      backgroundColor: "#018786"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    let width = Dimensions.get("window").width - 40;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ececec"
        }}
      >
        <StatusBar backgroundColor="#018786" barStyle="light-content" />
        <TouchableOpacity
          style={[
            { margin: 20 },
            {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "skyblue",
              width: width,
              borderRadius: 10
            }
          ]}
          onPress={() => this.props.navigation.navigate("Breakdown")}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Break Down</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 20,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "skyblue",
            width: width,
            borderRadius: 10
          }}
          activeOpacity={0.8}
          onPress={() => this.props.navigation.navigate("Packing")}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Break Down List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 20,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "skyblue",
            width: width,
            borderRadius: 10
          }}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
