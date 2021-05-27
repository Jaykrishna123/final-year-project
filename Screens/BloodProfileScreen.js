import React, { Component } from "react";
import { Image, StyleSheet, StatusBar } from "react-native";
import {
  Container,
  View,
  Header,
  Content,
  Text,
  Body,
  Title,
  List,
  ListItem,
  Left,
  Right,
} from "native-base";
import Communications from "react-native-communications";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";

export default class BloodProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmited: false,
      name: null,
      mobile: null,
      dob: null,
      group: null,
      donors: [],
      grouptoBeFiltered: null,
    };
  }
  state = {
    loading: true,
  };

  async componentDidMount() {
    this.setState({ loading: false });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getDonor(), 1000);
  }

  async getDonor() {
    return fetch(`https://medicare-health-65dbc.firebaseio.com/donors.json`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          donors: Object.values(responseJson),
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addDonor = (name, mobile, dob, group) => {
    if (
      this.state.name != null &&
      this.state.mobile != null &&
      this.state.dob &&
      this.state.group != null
    ) {
      fetch("https://medicare-health-65dbc.firebaseio.com/donors.json", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          mobile: mobile,
          group: group,
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.name != null) {
            this.setState({
              name: null,
              mobile: null,
              group: null,
              isSubmited: true,
            });
          } else {
            Alert.alert(
              "Oops !",
              "Something went wrong",
              [
                {
                  text: "OK",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
              ],
              { cancelable: false }
            );
          }
        })
        .done();
    } else {
      Alert.alert(
        "Oops !",
        "You forgot some field. Please fill it before submitting",
        [
          {
            text: "OK",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
  };

  onValueChange(value) {
    this.setState({
      group: value,
    });
  }

  onValueChange2(value) {
    this.setState({
      grouptoBeFiltered: value,
    });
  }

  _toggleDonorPost() {
    this.setState({
      isSubmited: false,
    });
  }

  render() {
    return (
      <Container>
        <View>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="#54a0ff"
            translucent={true}
          />
          <Image
            style={styles.profile__logo}
            source={require("../assets/profile.jpg")}
          ></Image>
        </View>

        <Body>
          <Text></Text>
          <Text note numberOfLines={1}>
            Mob:
          </Text>
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  profile__logo: {
    position: "relative",
    top: "20%",
    left: "38%",
    transform: [{ translateY: 10 }],
    height: 100,
    width: 100,
  },
});
