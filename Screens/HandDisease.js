import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { H1_Arthritis, H2_Sprain, H3_VaricoseVeins } from ".";

let screenwidth = Dimensions.get("window").width;

function HandDisease(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#54a0ff"
        translucent={true}
      />
      <Text style={styles.fnt}>Hand Related Disease</Text>
      <View style={{ flexDirection: "row" }}></View>

      <ScrollView
        style={styles.scrollView}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H1_Arthritis");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H1_Arthritis.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Arthritis</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H2_Sprain");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H2_Sprain.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Sprain</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H3_VaricoseVeins");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H3_VaricoseVeins.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Varicose Veins</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },

  scrollView: {
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 3,
    width: 335,
  },

  fnt: {
    color: "#0984e3",
    paddingTop: 5,
    fontSize: 20,
    textAlign: "center",
  },
  img_box1: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 15,
    width: 300,
    height: 175,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },

  Head_img: {
    marginTop: 5,
    marginLeft: 2,
    width: 250,
    height: 140,
  },

  Head_text: {
    justifyContent: "center",
    fontSize: 20,
    color: "#ab003c",
  },
});

export default HandDisease;
