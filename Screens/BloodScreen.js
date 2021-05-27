import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Alert,
  Picker,
  StatusBar,
} from "react-native";
import {
  Container,
  View,
  Header,
  Content,
  Text,
  Left,
  Right,
  Body,
  Title,
  Item,
  Input,
  Button,
  List,
  ListItem,
  DatePicker,
} from "native-base";
import Communications from "react-native-communications";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class BloodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmited: false,
      name: null,
      mobile: null,
      group: null,
      donors: [],
      grouptoBeFiltered: null,
    };
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

  addDonor = (name, mobile, group) => {
    if (
      this.state.name != null &&
      this.state.mobile != null &&
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
        <Content style={{ marginLeft: 10, marginRight: 10 }}>
          <View style={{ marginTop: 10 }}>
            <StatusBar
              barStyle="dark-content"
              hidden={false}
              backgroundColor="#54a0ff"
              translucent={true}
            />
            {this.state.isSubmited ? (
              <TouchableOpacity onPress={() => this._toggleDonorPost()}>
                <Text
                  style={{ fontSize: 20, color: "#002171", marginLeft: 80 }}
                >
                  Add more donors
                </Text>
              </TouchableOpacity>
            ) : (
              <View
                style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 40 }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#002171",
                    }}
                  >
                    DONATE YOUR BLOOD
                  </Text>
                </View>

                <Item rounded style={{ marginBottom: 20, marginTop: 20 }}>
                  <Input
                    placeholder="Name"
                    onChangeText={(input) => this.setState({ name: input })}
                  />
                </Item>

                <Item rounded style={{ marginBottom: 20, marginTop: 20 }}>
                  <Input
                    placeholder="Mobile"
                    onChangeText={(input) => this.setState({ mobile: input })}
                    keyboardType={"phone-pad"}
                  />
                </Item>

                <View style={styles.picker}>
                  <Picker
                    selectedValue={
                      (this.state.group && this.state.pickerValue) || "a"
                    }
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="Blood Group" value="null" />
                    <Picker.Item label="A+" value="A+" />
                    <Picker.Item label="A-" value="A-" />
                    <Picker.Item label="B+" value="B+" />
                    <Picker.Item label="B-" value="B-" />
                    <Picker.Item label="AB+" value="AB+" />
                    <Picker.Item label="AB-" value="AB-" />
                    <Picker.Item label="O+" value="O+" />
                    <Picker.Item label="O-" value="O-" />
                  </Picker>
                </View>

                <Button
                  block
                  light
                  onPress={() =>
                    this.addDonor(
                      this.state.name,
                      this.state.mobile,
                      this.state.group
                    )
                  }
                  style={{
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 30,
                    backgroundColor: "#2e86de",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#fff" }}>Submit</Text>
                </Button>
              </View>
            )}
          </View>

          <View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "#002171" }}
              >
                FIND DONORS
              </Text>
            </View>

            <View style={styles.picker}>
              <Picker
                selectedValue={
                  (this.state.grouptoBeFiltered && this.state.pickerValue) ||
                  "a"
                }
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Select Blood Group" value="null" />
                <Picker.Item label="A+" value="A+" />
                <Picker.Item label="A-" value="A-" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B-" value="B-" />
                <Picker.Item label="AB+" value="AB+" />
                <Picker.Item label="AB-" value="AB-" />
                <Picker.Item label="O+" value="O+" />
                <Picker.Item label="O-" value="O-" />
              </Picker>
            </View>
          </View>
          {this.state.grouptoBeFiltered == null ? null : (
            <View>
              {this.state.donors
                .filter(
                  (element) => element.group == this.state.grouptoBeFiltered
                )
                .map((item, index) => (
                  <List style={styles.con}>
                    <ListItem thumbnail>
                      <Body style={styles.modal}>
                        <Left>
                          <View
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Text style={styles.group}>{item.group}</Text>
                            <Text style={{ paddingLeft: 10, paddingTop: 5 }}>
                              {item.name}
                            </Text>
                          </View>

                          <Text
                            note
                            numberOfLines={1}
                            style={{ paddingTop: 7 }}
                          >
                            Mob: {item.mobile}
                          </Text>
                        </Left>
                      </Body>
                    </ListItem>

                    <TouchableOpacity
                      onPress={() =>
                        Communications.phonecall(`${item.mobile}`, true)
                      }
                    >
                      <View style={styles.call}>
                        <FontAwesome
                          style={styles.profile__btn}
                          name="phone"
                          color="#05375a"
                          size={25}
                        />
                        <Text style={styles.profile__text}>Call</Text>
                      </View>
                    </TouchableOpacity>
                  </List>
                ))}
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  con: {
    marginBottom: 70,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#848484",
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 10,
  },
  call: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 80,
    marginRight: 50,
  },
  profile__btn: {
    color: "#00C853",
  },
  profile__text: {
    color: "#3498db",
    paddingLeft: 10,
  },
  date: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
  },
  modal: {
    position: "absolute",
    left: 0,
    top: 0,
    marginTop: 40,
  },
  group: {
    backgroundColor: "#ea8685",
    color: "#D50000",
    padding: 5,
  },
});
