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
import { C1_Angina, C2_Asthma, C3_HeartBurn, C4_Hiccup } from ".";

let screenwidth = Dimensions.get("window").width;

export default function ChestDisease(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#54a0ff"
        translucent={true}
      />
      <Text style={styles.fnt}>Chest Related Disease</Text>
      <View style={{ flexDirection: "row" }}></View>

      <ScrollView
        style={styles.scrollView}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("C1_Angina");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/C1_Angina.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Angina</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("C2_Asthma");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/C2_Asthma.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Asthma</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("C3_HeartBurn");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/C3_HeartBurn.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>HeartBurn</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("C4_Hiccup");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/C4_Hiccup.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Hiccup</Text>
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
