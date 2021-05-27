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
  Sk10_Measles,
  Sk11_PingmentationOnSkin,
  Sk12_Ringworm,
  Sk1_Acne,
  Sk2_Boils,
  Sk3_Bruise,
  Sk4_Burns,
  Sk5_Chapped_crackedLips,
  Sk6_chikenpox,
  Sk7_corns_calluses,
  Sk8_Dry_Skin,
  Sk9_Hives,
} from ".";

let screenwidth = Dimensions.get("window").width;

export default function SkinDisease(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#54a0ff"
        translucent={true}
      />
      <Text style={styles.fnt}>Skin Related Disease</Text>
      <View style={{ flexDirection: "row" }}></View>

      <ScrollView
        style={styles.scrollView}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk1_Acne");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk1_Acne.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Acne</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk2_Boils");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk2_Boils.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Boils</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk3_Bruise");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk3_Bruise.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Bruise</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk4_Burns");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk4_Burns.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Burns</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk5_Chapped_crackedLips");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk5_Chapped_crackedLips.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Chapped Cracked Lips</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk6_chikenpox");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk6_chikenpox.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Chikenpox</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk7_corns_calluses");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk7_corns_calluses.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Corns Calluses</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk8_Dry_Skin");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk8_Dry_Skin.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Dry Skin</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk9_Hives");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk9_Hives.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Hives</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk10_Measles");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk10_Measles.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Measles</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk11_PingmentationOnSkin");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk11_PingmentationOnSkin.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Pingmentation On Skin</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Sk12_Ringworm");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Sk12_Ringworm.jpg")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Ring Worm</Text>
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
