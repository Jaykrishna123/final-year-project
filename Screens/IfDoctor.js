import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Picker,
  StatusBar,
} from "react-native";

let screenwidth = Dimensions.get("window").width;

class IfDoctor extends Component {
  state = { user: "" };
  updateUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <ScrollView
        style={styles.basicdetails}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
      >
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#54a0ff"
          translucent={true}
        />

        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label="Qualification" value="qualification" />
          <Picker.Item label="MD" value="md" />
          <Picker.Item label="DO" value="do" />
          <Picker.Item label="PA" value="pa" />
          <Picker.Item label="NP" value="np" />
          <Picker.Item label="DDS" value="dds" />
          <Picker.Item label="Other" value="other" />
        </Picker>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Save & Next</Text>
        </TouchableOpacity>
        <Text
          style={styles.skip}
          onPress={() => navigation.navigate("BasicDetails")}
        >
          Skip
        </Text>
      </ScrollView>
    );
  }
}
export default IfDoctor;

const styles = StyleSheet.create({
  basicdetails: {
    marginTop: 20,
    width: screenwidth,
  },

  button: {
    height: 60,
    alignItems: "center",
    backgroundColor: "#00B0FF",
    marginTop: 10,
    width: 150,
  },
  btntext: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
  },
  skip: {
    borderBottomColor: "#000000",

    marginTop: -40,
    paddingLeft: 190,
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
  },
});
