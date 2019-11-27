import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";

class QRScreen extends Component {
  state = {
    qrCodeData: "",
    data: {
      companyName: "",
      machineInventory: "",
      purchaseCountry: "",
      companyName: "",
      serialNumber: "",
      location: "",
      machineType: ""
    }
  };

  constructor(props) {
    super(props);

    this.state = { qrCodeData: " ", data: [] };
  }

  componentDidMount() {
    //The code bellow will receive the props passed by QRCodeScannerScreen

    const qrCodeData = this.props.navigation.getParam("data", "No data read");
    const id = this.props.navigation.getParam("id", "");
    alert(id);
    // const scanner = this.props.navigation.getParam("scanner", () => false);

    this.setState({ qrCodeData: qrCodeData });

    const ID = qrCodeData;
    alert(ID);
    fetch(`http://192.168.8.100:3000/api/machine/getbyID?id=${ID}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: JSON.parse(JSON.stringify(res))
        });

        // alert(this.state.data);
      })
      .catch(err => {
        alert(err);
      });

    // alert(this.state.data[0].companyName);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.data.companyName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default QRScreen;
