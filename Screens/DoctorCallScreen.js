import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Call from "../Screens/Call";

function DoctorCallScreen() {
  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#54a0ff"
        translucent={true}
      />

      <View
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "#000000aa",
          marginTop: 55,
        }}
      >
        <View
          style={{ backgroundColor: "#6dd5ed", height: 220, marginTop: -155 }}
        >
          <View style={styles.profile_img}>
            <Image
              source={require("../assets/docicon.jpg")}
              style={styles.img}
            />
          </View>
          <Text style={styles.doc_text}>Dr.Yogesh Patidar</Text>
          <Text style={styles.specialist_text1}>Neurologists</Text>
          <FontAwesome name="map-marker" size={20} style={styles.map_icon} />
          <Text style={styles.loc_text}>Mumbai</Text>
        </View>
        <View style={{ backgroundColor: "#fff", height: 200 }}>
          <Call />
          <TouchableOpacity>
            <View style={styles.phone_chat_bg}>
              <FontAwesome
                name="comments"
                size={30}
                style={styles.phone_call_icon}
              />
              <Text style={styles.chat_text}>Chat</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.phone_moreinfo_bg}>
              <FontAwesome
                name="info"
                size={30}
                style={styles.phone_call_icon}
              />
              <Text style={styles.moreinfo_text}>More Info</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.border_line}></View>
          <Text style={styles.personal_info_text}>Personal Information</Text>
          <FontAwesome name="angle-right" size={30} style={styles.menu_icon} />
          <View style={styles.border_line1}></View>
          <Text style={styles.personal_info_text}>Working address</Text>
          <FontAwesome name="angle-right" size={30} style={styles.menu_icon} />
        </View>
        <TouchableOpacity style={styles.find_search_btn}>
          <Text style={styles.search_text}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  call_profile: {
    width: 900,
    height: 250,
  },
  profile_img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#0ED2F7",
    borderWidth: 3,
    borderRadius: 100,
    width: 90,
    height: 90,
    position: "relative",
    left: "38%",
    top: 10,
  },

  img: {
    marginTop: -2,
    width: "100%",
    height: 80,
    borderRadius: 50,
  },
  doc_text: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    paddingTop: 15,
  },
  specialist_text1: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  map_icon: {
    color: "#fff",
    marginLeft: 150,
    marginTop: 10,
  },
  loc_text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: -20,
  },
  phone_call_bg: {
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 50,
    height: 50,
    marginTop: -27,
    marginLeft: 50,
    borderColor: "#6dd5ed",
    borderWidth: 0.6,
  },
  phone_chat_bg: {
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 50,
    height: 50,
    marginTop: -50,
    marginLeft: 145,
    borderColor: "#6dd5ed",
    borderWidth: 0.6,
  },
  phone_moreinfo_bg: {
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 50,
    height: 50,
    marginTop: -50,
    marginLeft: 250,
    borderColor: "#6dd5ed",
    borderWidth: 0.6,
  },
  phone_call_icon: {
    marginTop: 10,
    marginLeft: 13,
    color: "#6dd5ed",
  },
  call_text: {
    paddingTop: 15,
    paddingLeft: 12,
  },
  chat_text: {
    paddingTop: 15,
    paddingLeft: 12,
  },
  moreinfo_text: {
    paddingTop: 15,
    marginLeft: -15,
    textAlign: "center",
  },
  border_line: {
    width: 400,
    marginTop: 40,
    marginLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#b2bec3",
  },
  border_line1: {
    width: 400,
    marginTop: 20,
    marginLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#b2bec3",
  },
  personal_info_text: {
    color: "#b2bec3",
    fontWeight: "bold",
    fontSize: 17,
    paddingTop: 20,
    paddingLeft: 40,
  },
  menu_icon: {
    marginTop: -25,
    marginLeft: 300,
    color: "#b2bec3",
  },
  find_search_btn: {
    backgroundColor: "#0ed2f7",
    color: "#0ED2F7",
    width: 200,
    height: 50,
    fontSize: 24,
    marginTop: 50,
    marginLeft: 80,
    borderRadius: 5,
  },
  search_text: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    paddingTop: 8,
  },
});
export default DoctorCallScreen;
