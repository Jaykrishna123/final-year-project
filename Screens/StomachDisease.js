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
import {
  S1_Acid_Reflux,
  S2_Appendicits,
  S3_Belly_fat,
  S4_Constipations,
  S5_Dysmenorheas,
  S6_Gastritis,
  S7_Indigenstion,
  S8_KidneyStone,
  S9_PMS,
} from ".";

let screenwidth = Dimensions.get("window").width;

export default function StomachDisease(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#54a0ff"
        translucent={true}
      />
      <Text style={styles.fnt}>Stomach Related Disease</Text>
      <View style={{ flexDirection: "row" }}></View>

      <ScrollView
        style={styles.scrollView}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("S1_Acid_Reflux");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/S1_Acid_Reflux.png")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Acid Reflux</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("S2_Appendicits");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/S2_Appendicits.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Appendicits</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("S3_Belly_fat");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/S3_Belly_fat.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Belly Fat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("S4_Constipations");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/S4_Constipations.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Constipations</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("S5_Dysmenorheas");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/S5_Dysmenorheas.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Dysmenorheas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("S6_Gastritis");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/S6_Gastritis.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Gastritis</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("S7_Indigenstion");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/S7_Indigenstion.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Indigenstion</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("S8_KidneyStone");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/S8_KidneyStone.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>KidneyStone</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("S9_PMS");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/S9_PMS.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>PMS</Text>
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
