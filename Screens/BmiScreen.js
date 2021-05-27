import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";
class Inputs extends Component {
  state = {
    height: "",
    weight: "",
    bmi: "",
    BmiResult: "",
  };
  handleHeight = (text) => {
    this.setState({ height: text });
  };
  handleWeight = (text) => {
    this.setState({ weight: text });
  };
  calculate = (height, weight) => {
    //calculation
    var result =
      (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    result = result.toFixed(2);
    //display result
    this.setState({ bmi: result });
    if (result < 18.5) {
      this.setState({ BmiResult: "Underweight" });
    } else if (result >= 18.5 && result < 25) {
      this.setState({ BmiResult: "Normal weight" });
    } else if (result >= 25 && result < 30) {
      this.setState({ BmiResult: "Overweight" });
    } else if (result >= 30) {
      this.setState({ BmiResult: "Obese" });
    } else {
      alert("Incorrect Input!");
      this.setState({ BmiResult: "" });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#54a0ff"
          translucent={true}
        />
        <Text style={styles.title}>BMI Calculator</Text>
        <View style={styles.container1}>
          <Text style={styles.label}>Height</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Height (Cm)"
            autoCapitalize="none"
            onChangeText={this.handleHeight}
          />
        </View>
        <View style={styles.container2}>
          <Text style={styles.label}>Weight</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Weight (Kg)"
            autoCapitalize="none"
            onChangeText={this.handleWeight}
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.calculate(this.state.height, this.state.weight)}
        >
          <Text style={styles.submitButtonText}> Calculate BMI </Text>
        </TouchableOpacity>
        <Text style={styles.output}>{this.state.bmi}</Text>
        <Text style={styles.resultText}>{this.state.BmiResult}</Text>
      </View>
    );
  }
}
export default Inputs;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
  container1: {
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
  },
  container2: {
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "#2196f3",
    paddingTop: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    textAlign: "center",
    color: "black",
    // fontWeight:"bold",
    fontSize: 18,
  },
  output: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 40,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  resultText: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 40,
    color: "#48d1cc",
  },
  label: {
    marginLeft: 15,
  },
});
