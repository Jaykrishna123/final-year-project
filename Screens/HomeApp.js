import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../Componets/Button";
import { logoutUser } from "../api/auth-api";

function HomeApp(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#54a0ff"
          translucent={true}
        />

        <View style={styles.bg_back_color}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
          ></Image>
          <Text style={styles.fnt}>Automated HealthCare</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("BmiScreen");
              }}
            >
              <View style={styles.boxes_bmi}>
                <Image
                  source={require("../assets/bmi_calculator.jpeg")}
                  style={styles.bmi_calculator_img}
                ></Image>
                <Text style={styles.bmi_text}>Bmi Calculator</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("BodyPartsPage");
              }}
            >
              <View style={styles.boxes_visual}>
                <Image
                  source={require("../assets/visual_body.jpeg")}
                  style={styles.bmi_calculator_img}
                ></Image>
                <Text style={styles.bmi_text}>Body Visualizer</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.8,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("BloodScreen")}
            >
              <View style={styles.boxes_blood}>
                <Image
                  source={require("../assets/Find_blood.jpeg")}
                  style={styles.bmi_calculator_img}
                ></Image>
                <Text style={styles.blood_text}>Find Blood</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("DoctorScreen")}
            >
              <View style={styles.boxes_doctor}>
                <Image
                  source={require("../assets/Find_Doctor.jpeg")}
                  style={styles.bmi_calculator_img}
                ></Image>
                <Text style={styles.blood_text}>Find Doctor</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          ></View>
        </View>

        <Button style={styles.logout} mode="outlined" onPress={logoutUser}>
          Logout
        </Button>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bg_back_color: {
    backgroundColor: "#ecf0f1",
    width: 500,
  },
  fnt: {
    color: "#0984e3",
    paddingTop: 5,
    fontSize: 20,
    textAlign: "center",
  },
  logo: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 90,
    height: 90,
    marginTop: 30,
  },
  boxes_bmi: {
    backgroundColor: "#fff",
    marginLeft: 90,
    marginTop: 70,
    width: 150,
    height: 150,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },
  boxes_visual: {
    backgroundColor: "#fff",
    marginTop: 70,
    marginLeft: 20,
    width: 150,
    height: 150,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },
  boxes_blood: {
    backgroundColor: "#fff",
    marginTop: 30,
    marginLeft: 90,
    width: 150,
    height: 150,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },
  boxes_doctor: {
    backgroundColor: "#fff",
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 10,
    width: 150,
    height: 150,
    borderRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    elevation: 5,
  },
  bmi_calculator_img: {
    marginTop: 20,
    marginLeft: 36,
    width: 70,
    height: 60,
  },
  bmi_text: {
    paddingTop: 10,
    paddingLeft: 23,
    fontSize: 15,
    color: "#ab003c",
  },
  blood_text: {
    paddingTop: 10,
    paddingLeft: 35,
    fontSize: 15,
    color: "#ab003c",
  },
  logout: {
    backgroundColor: "#2196f3",
    width: 360,
  },
});
export default HomeApp;
