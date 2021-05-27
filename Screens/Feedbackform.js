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
import react from "react";
import { add } from "react-native-reanimated";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  state = {
    F_rating: "",
    F_description: " ",
  };
  handleF_description = (text) => {
    this.setState({ F_description: text });
  };
  Sub = (F_rating, F_description) => {
    alert("Core rating: " + F_rating + " Enter Description: " + F_description);
  };

  updateInput_des = (e) => {
    this.setState({
      [e.target.F_description]: e.target.value,
    });
  };
  updateInput_rate = (e) => {
    this.setState({
      [e.target.rating]: e.target.value,
    });
  };

  addFeedback = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const feedbackRef = db.collection(FeedbackForm).add({
      F_description: this.state.F_description,
      F_rating: this.state.F_rating.add(feedbackRef),
    });
    this.setState({
      F_description: "",
      F_rating: "",
    });
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
        Core Rating For Our App
        <View style={styles.container1}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            onChange={this.updateInput_rate}
            value={this.state.rating}
          />
        </View>
        <View style={styles.container2}>
          Description:
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Description (Comments)"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChange={this.updateInput_des}
            value={this.state.F_description}
          />
          //onChangeText = {this.handleF_description}
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.Sub(this.state.F_rating, this.state.F_description)
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
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    padding: 0,
    backgroundColor: "#f5fffa",
  },
  container1: {
    paddingTop: 20,
    margin: 30,
  },
  container2: {
    paddingTop: 20,
    margin: 30,
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
});
