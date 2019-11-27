import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  AsyncStorage
} from "react-native";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = { mechanicID: " ", data: [], mechanic: "" };
  }

  state = {
    mechanicID: "",
    mechanic: "",
    data: []
  };

  sendData() {
    const mechanicID = this.state.mechanic;
    fetch(
      `http://192.168.8.100:3000/api/mechanic/getId?mechanicId=${mechanicID}`,
      {
        method: "POST"
      }
    )
      .then(res => res.json())
      .then(res => {
        const data = res;
        this.setState({
          mechanicID: res.mechanicID
        });
        if (res.mechanicID) {
          // alert(res.mechanicID);
          this.props.navigation.navigate("Home", {
            id: res._id
          });
          // AsyncStorage.setItem("user", user);
        } else {
          alert("No user for this Id");
        }
      })
      .catch(err => {
        alert(err);
      });
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 160, height: 90, marginTop: 150 }}
          source={require("../images/final.png")}
        />

        <TextInput
          style={{
            height: 40,
            borderColor: "#BCE0FD",
            borderWidth: 1,
            marginTop: 32,
            width: 288,
            borderRadius: 6
          }}
          onChangeText={mechanic => this.setState({ mechanic })}
          value={this.state.onChangeText}
          placeholder="  User Id"
        />

        <View
          style={{ height: 48, width: 295, marginTop: 28, borderRadius: 6 }}
        >
          <Button title="Log In" onPress={this.sendData.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  }
});

export default LoginScreen;
