import React, { Component } from "react";

import {
  StyleSheet,
  Platform,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  Alert,
  YellowBox,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default class DoctProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: null,
      isLoading: true,
    };

    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
    ]);
  }

  componentDidMount() {
    this.webCall(props);
  }

  GetItem(flower_name) {
    Alert.alert(flower_name);
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  webCall = () => {
    return fetch(
      "http://www.json-generator.com/api/json/get/ceGmkgGqeW?indent=2"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            // In this block you can do something with new state.
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.webCall();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#54a0ff"
          translucent={true}
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Image source={{ uri: item.image }} style={styles.imageView} />
              <View style={styles.doctor__info}>
                <Text
                  onPress={this.GetItem.bind(this, item.name)}
                  style={styles.textView}
                >
                  {item.name}
                </Text>
                <Text style={styles.specialist__name}>{item.specialist}</Text>
                <View style={styles.doctor_location}>
                  <Image
                    source={{ uri: item.locationimage }}
                    style={styles.ratingimageView}
                  />
                  <Text style={styles.txt_location}>{item.location}</Text>
                </View>
                <TouchableOpacity style={styles.find_search_btn}>
                  <Text style={styles.search_text}>Book Appointment</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.doctor__rating}>
                <Image
                  source={{ uri: item.ratingimage }}
                  style={styles.ratingimageView}
                />
                <Text style={styles.rating_number}>{item.rating}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    marginTop: 50,
  },

  imageView: {
    width: 100,
    height: 100,
    margin: 7,
    borderRadius: 200,
  },
  ratingimageView: {
    position: "relative",
    left: 10,
    top: 8,
    width: 30,
    height: 30,
    margin: 7,
    borderRadius: 7,
  },
  rating_number: {
    paddingTop: 18,
    paddingLeft: 10,
  },
  textView: {
    padding: 25,
    color: "#000",
    fontWeight: "bold",
  },
  specialist__name: {
    color: "#000",
    paddingLeft: 25,
    marginTop: -15,
  },
  txt_location: {
    paddingTop: 19,
    paddingLeft: 0,
    paddingBottom: 10,
    color: "#000",
  },

  find_search_btn: {
    backgroundColor: "#0ed2f7",
    color: "#0ED2F7",
    width: 130,
    height: 25,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 22,
    borderRadius: 5,
  },
  search_text: {
    textAlign: "center",
    fontSize: 12,
    color: "#fff",
    paddingTop: 4,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  doctor__info: {
    display: "flex",
    flexDirection: "column",
  },
  doctor_location: {
    display: "flex",
    flexDirection: "row",
  },
  doctor__rating: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
});
// http://www.json-generator.com/api/json/get/cfJuvCRHiq?indent=2
