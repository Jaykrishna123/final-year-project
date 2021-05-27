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
  H2_black_eyes,
  H5_Headache,
  H6_hoarseness,
  H7_Migraine_headache,
} from ".";
import H10_tinnitus from "./H10_tinnitus";
import H11_Tooth_Pain from "./H11_Tooth_Pain";
import H3_earache from "./H3_earache";
import H4_eye_pain from "./H4_eye_pain";
import H8_sinusitis from "./H8_sinusitis";
import H9_Sore_Throat from "./H9_Sore_Throat";

let screenwidth = Dimensions.get("window").width;

function HeadDisease(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#54a0ff"
        translucent={true}
      />
      <Text style={styles.fnt}>Head Related Disease</Text>
      <View style={{ flexDirection: "row" }}></View>

      <ScrollView
        style={styles.scrollView}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H1AbscessTooth");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H1_Abscess_Tooth.png")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Abscess Tooth</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H2_black_eyes");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H2_black_eyes.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Black eyes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H3_earache");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H3_earache.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Earache</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H4_eye_pain");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H4_eye_pain.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Eye pain</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H5_Headache");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H5_Headache.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Headache</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H6_hoarseness");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H6_hoarseness.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Hoarseness</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H7_Migraine_headache");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H7_Migraine_headache.png")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Migraine headache</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H8_sinusitis");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H8_sinusitis.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Sinusitis</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H9_Sore_Throat");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H9-Sore-Throat.jpeg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Sore Throat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H10_tinnitus");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H10_tinnitus.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Tinnitus</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("H11_Tooth_Pain");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/H11_Tooth_Pain.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Tooth Pain</Text>
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
    width: 360,
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
export default HeadDisease;
