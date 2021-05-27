import React, { Component } from "react";
import Picker from "react-native-picker-select";
import MultiSelect from "react-native-multiple-select";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  Picker,
  MultiSelect,
  StatusBar,
} from "react-native";

const items = [
  {
    id: "1",
    name: "BP",
  },
  {
    id: "2",
    name: "Diabets",
  },
  {
    id: "3",
    name: "Cancer",
  },
  {
    id: "4",
    name: "Other",
  },
];

let screenwidth = Dimensions.get("window").width;

class Inputs extends Component {
  state = {
    choosenIndex: 0,
    H_height: " ",
    H_weight: " ",
    H_BloodG: " ",
    H_age: "",
    H_diseses: " ",
  };

  state = {
    selectedItems: [],
  };

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  handleH_height = (text) => {
    this.setState({ H_height: text });
  };
  handleH_weight = (text) => {
    this.setState({ H_weight: text });
  };
  handleH_BloodG = (text) => {
    this.setState({ H_BloodG: text });
  };
  handleH_age = (text) => {
    this.setState({ H_age: text });
  };
  handleH_diseses = (text) => {
    this.setState({ H_diseses: text });
  };

  Sub = (H_height, H_weight, H_BloodG, H_age, H_diseses) => {
    alert(
      "Enter Height: " +
        H_height +
        " Enter Weight: " +
        H_weight +
        " Enter Blood Group: " +
        H_BloodG +
        "Enter Age:" +
        H_age +
        " Choose Disease: " +
        H_diseses
    );
  };

  render() {
    const { selectedItems } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#54a0ff"
          translucent={true}
        />
        <Text style={styles.textStyle}>
          <center>Health Information</center>
        </Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Your Height"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleH_height}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter your Weight"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleH_weight}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter your Age"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleH_age}
        />

        <ScrollView
          style={styles.input}
          keyboardDismissMode="on-drag"
          maximumZoomScale={3}
          minimumZoomScale={3}
        >
          <Picker
            selectedValue={this.state.H_BloodG}
            onValueChange={this.handleH_BloodG}
          >
            <Picker.Item label="Blood Groups" value="Blood Groups" />
            <Picker.Item label="O-ve" value="O-ve" />
            <Picker.Item label="O+ve" value="O+ve" />
            <Picker.Item label="A-ve" value="A-ve" />
            <Picker.Item label="A+ve" value="A+ve" />
            <Picker.Item label="B-ve" value="B-ve" />
            <Picker.Item label="B+ve" value="B+ve" />
            <Picker.Item label="AB-ve" value="AB-ve" />
            <Picker.Item label="AB+ve" value="AB+ve" />
          </Picker>
        </ScrollView>

        <View style={{ flex: 1 }}>
          <MultiSelect
            hideTags
            items={items}
            uniqueKey="id"
            ref={(component) => {
              this.multiSelect = component;
            }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Select diseses:"
            searchInputPlaceholderText="Search Diseses"
            onChangeInput={(text) => console.log(text)}
            altFontFamily="ProximaNova-Light"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: "#CCC" }}
            submitButtonColor="#CCC"
            submitButtonText="Submit"
          />

          <View>
            {this.multiSelect &&
              this.multiSelect.getSelectedItemsExt(selectedItems)}
            ;
          </View>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.Sub(
              this.state.H_height,
              this.state.H_weight,
              this.state.H_BloodG,
              this.state.H_age,
              this.state.H_diseses
            )
          }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  ScrollView: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },

  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 10,
    height: 50,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 20,
  },
  text: {
    paddingEnd: 10,
    textAlign: "center",
    color: "#7a42f4",
    fontSize: 25,
  },
  Text: {
    paddingEnd: 10,
    color: "#7a42f4",
    fontSize: 25,
  },
});
