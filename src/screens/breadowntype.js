import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";
import { Dropdown } from 'react-native-material-dropdown';

class BreakdownTypeScreen extends Component {
  state = {
    qrCodeData: "",
    id:"",
    breakdowntypeid:"",
    data: {
        breakdowntype:""
    }
  };

  constructor(props) {
    super(props);

    this.state = { qrCodeData: " ", data: [],id:"" };
  }
  sendData() {

    const machine = this.props.navigation.getParam("machine", "No data read");
    
    const id = this.props.navigation.getParam("id", "");
   
     this.props.navigation.navigate("Superviser", {
        machine: machine,
        id:id,
        breakdowntypeid:this.state.breakdowntypeid,
      });
    

 


    
 
  }

  componentDidMount() {
    //The code bellow will receive the props passed by QRCodeScannerScreen
    const id = this.props.navigation.getParam("id", "");
    const qrCodeData = this.props.navigation.getParam("data", "No data read");
   
   
    // const scanner = this.props.navigation.getParam("scanner", () => false);

    this.setState({ qrCodeData: qrCodeData });
    this.setState({ id:id });
    fetch(`http://192.168.21.242:3000/api/breakdowntype/getAll`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: JSON.parse(JSON.stringify(res))
          
        });
        console.log(res);
        // alert(this.state.data);
      })
      .catch(err => {
        alert(err);
      });

    // alert(this.state.data[0].companyName);
  }
  onChangeText(text) {
    console.log(text);
    this.setState({ breakdowntypeid: text });
  }

  render() {
    return (
      <View style={styles.container}>
      <Card
  
  titleStyle={{textAlign:"center"}}
  >
  
  <Dropdown
        label='Select Breakdown Type'
        data={this.state.data}
        valueExtractor ={({_id})=>_id} // this one extract the value from your data
        labelExtractor ={({breakdowntype})=>breakdowntype} 
        animationDuration={100}
        onChangeText={value => this.onChangeText(value)}//this one extracts the label
      />

  
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Confirm'
    onPress={this.sendData.bind(this)} />
</Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    width:"95%"
  },
  text: {
    fontSize: 15,
    textAlign: "left",
    fontWeight: 'bold',
  }
});

export default BreakdownTypeScreen;