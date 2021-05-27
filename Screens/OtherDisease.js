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
  O1_Low_BP,
  O2_High_BP,
  O3_High_cholesterol,
  O4_Insomina,
  O5_Acidic_Body,
  O6_malaria,
  O7_Diabetes,
  O8_Cough,
  O9_Fever,
} from ".";

let screenwidth = Dimensions.get("window").width;

export default function OtherDisease(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#54a0ff"
        translucent={true}
      />
      <Text style={styles.fnt}>Other Disease</Text>
      <View style={{ flexDirection: "row" }}></View>

      <ScrollView
        style={styles.scrollView}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("O1_Low_BP");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/O1_Low_BP.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Low BP</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("O2_High_BP");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/O2_High_BP.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>High BP</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("O3_High_cholesterol");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/O3_High_cholesterol.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>High cholesterol</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("O4_Insomina");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/O4_Insomina.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Insomina</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("O5_Acidic_Body");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/O5_Acidic_Body.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Acidic Body</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("O6_malaria");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/O6_malaria.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Malaria</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("O7_Diabetes");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/O7_Diabete.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Diabetes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("O8_Cough");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/O8_Cough.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Cough</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("O9_Fever");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/O9_Fever.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Fever</Text>
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
