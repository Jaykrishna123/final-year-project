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

let screenwidth = Dimensions.get("window").width;

function BodyPartsPage(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#54a0ff"
        translucent={true}
      />
      <Text style={styles.fnt}>3D Body Visualizer</Text>
      <View style={{ flexDirection: "row" }}></View>

      <ScrollView
        style={styles.scrollView}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("HeadDisease");
          }}
        >
          <View style={styles.img_box1}>
            <Image
              source={require("../assets/Head.gif")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Head</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("ChestDisease");
          }}
        >
          <View style={styles.img_box2}>
            <Image
              source={require("../assets/Chest.gif")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Chest</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("StomachDisease");
          }}
        >
          <View style={styles.img_box3}>
            <Image
              source={require("../assets/Stomach.gif")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Stomach</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("HandDisease");
          }}
        >
          <View style={styles.img_box4}>
            <Image
              source={require("../assets/Hand.gif")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Hand</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("LegDisease");
          }}
        >
          <View style={styles.img_box5}>
            <Image
              source={require("../assets/Leg.gif")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Leg</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("BackDisease");
          }}
        >
          <View style={styles.img_box6}>
            <Image
              source={require("../assets/Back.gif")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Back</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("SkinDisease");
          }}
        >
          <View style={styles.img_box7}>
            <Image
              source={require("../assets/Skin.gif")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Skin</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("OtherDisease");
          }}
        >
          <View style={styles.img_box8}>
            <Image
              source={require("../assets/Other.gif")}
              style={styles.Head_img}
            ></Image>
            <Text style={styles.Head_text}>Other</Text>
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
    width: 355,
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
    marginLeft: 100,
    marginTop: 15,
    width: 150,
    height: 175,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },

  img_box2: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 150,
    height: 175,
    marginTop: 15,
    marginLeft: 100,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },

  img_box3: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 150,
    height: 175,
    marginTop: 15,
    marginLeft: 100,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },
  img_box4: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 150,
    height: 175,
    marginTop: 15,
    marginLeft: 100,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },
  img_box5: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 150,
    height: 175,
    marginTop: 15,
    marginLeft: 100,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },

  img_box6: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 150,
    height: 175,
    marginTop: 15,
    marginLeft: 100,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },

  img_box7: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 150,
    height: 175,
    marginTop: 15,
    marginLeft: 100,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },

  img_box8: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 150,
    height: 175,
    marginTop: 15,
    marginLeft: 100,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },

  Head_img: {
    marginTop: 5,
    marginLeft: 2,
    width: 140,
    height: 140,
  },

  Head_text: {
    justifyContent: "center",
    fontSize: 20,
    color: "#ab003c",
  },
});
export default BodyPartsPage;
