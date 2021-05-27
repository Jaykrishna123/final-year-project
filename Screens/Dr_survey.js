import React, { Component } from "react";
import StarRating from "react-native-star-rating";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  state = {
    D_name: " ",
    D_Address: " ",
    D_contact: " ",
    D_ratings: " ",
  };
  handleD_name = (text) => {
    this.setState({ D_name: text });
  };
  handleD_Address = (text) => {
    this.setState({ D_Address: text });
  };
  handleD_contact = (text) => {
    this.setState({ D_contact: text });
  };
  handleD_contact = (text) => {
    this.setState({ D_ratings: text });
  };

  Sub = (D_name, D_Address, D_contact, D_ratings) => {
    alert(
      "Enter Name: " +
        D_name +
        " Enter Address: " +
        D_Address +
        " Enter Contact: " +
        D_contact +
        " Rating: " +
        D_ratings
    );
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
        <Text style={styles.text}>DOCTOR SURVEY FORM</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name Of Doctor"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleD_name}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Address"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleD_Address}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Contact No (optional)"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleD_contact}
        />

        <Text> Ratings</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.Sub(
              this.state.D_name,
              this.state.D_Address,
              this.state.D_contact
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
});
