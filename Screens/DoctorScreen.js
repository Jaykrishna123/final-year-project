import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Communications from "react-native-communications";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import MyDatePicker from "../Screens/MyDatePicker";

function DoctorScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("doc");
  const [selValue, setSelValue] = useState("location");
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [result, setResult] = useState([]);

  const handleSubmit = () => {
    axios
      .get("http://www.json-generator.com/api/json/get/cuHNjuMTzC?indent=2")
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    const temp = post.filter(
      (item) => item.specialist === selectedValue && item.location === selValue
    );
    setResult(temp);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#54a0ff"
          translucent={true}
        />
        <View>
          <Text style={styles.find_doc_text}>Find Doctor</Text>
          <View style={styles.specialist_doc_text}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item
                label="Specialist Doctor"
                color="#b2bec3"
                value="specialist"
              ></Picker.Item>
              <Picker.Item
                label="Pediatrician"
                value={"Pediatrician"}
              ></Picker.Item>
              <Picker.Item
                label="General Surgeon"
                value={"General Surgeon"}
              ></Picker.Item>
              <Picker.Item
                label="Neurologist"
                value={"Neurologist"}
              ></Picker.Item>
              <Picker.Item
                label="Dermatologists"
                value={"Dermatologists"}
              ></Picker.Item>
            </Picker>
          </View>
          <View style={styles.specialist_gen_text}>
            <Picker
              selectedValue={selValue}
              onValueChange={(itemValue) => setSelValue(itemValue)}
            >
              <Picker.Item
                label="location"
                color="#b2bec3"
                value="location"
              ></Picker.Item>
              <Picker.Item label="Mumbai" value={"Mumbai"}></Picker.Item>
              <Picker.Item label="Delhi" value={"Delhi"}></Picker.Item>
              <Picker.Item label="Kanpur" value={"Kanpur"}></Picker.Item>
              <Picker.Item label="Hyderabad" value={"Hyderabad"}></Picker.Item>
              <Picker.Item label="Bangalore" value={"Bangalore"}></Picker.Item>
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.find_search_btn}
            onPress={handleSubmit}
          >
            <Text style={styles.search_text}>Search</Text>
          </TouchableOpacity>
        </View>
        {result && (
          <View>
            {result.map((item) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: 50,
                }}
              >
                <Image source={{ uri: item.image }} style={styles.imageView} />
                <View style={styles.doctor__info}>
                  <Text style={styles.textView}>{item.name}</Text>
                  <Text style={styles.specialist__name} value={"specialist"}>
                    {item.specialist}
                  </Text>
                  <View style={styles.doctor_location}>
                    <Image
                      source={{ uri: item.locationimage }}
                      style={styles.ratingimageView}
                    />
                    <Text style={styles.txt_location} value={"location"}>
                      {item.location}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() =>
                      Communications.phonecall(`${item.phonenumber}`, true)
                    }
                  >
                    <View style={styles.call}>
                      <FontAwesome
                        style={styles.profile__btn}
                        name="phone"
                        color="#05375a"
                        size={25}
                      />
                      <Text style={styles.profile__text}>Call</Text>
                    </View>
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
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
    height: "100%",
  },
  call: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 20,
  },
  profile__btn: {
    color: "#00C853",
  },
  profile__text: {
    color: "#3498db",
    paddingLeft: 10,
  },
  imageView: {
    width: 100,
    height: 100,
    margin: 7,
    borderRadius: 200,
  },
  doctor__show: {
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
    paddingLeft: 15,
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
  find_doc_text: {
    color: "#0ED2F7",
    textAlign: "center",
    paddingTop: 40,
    fontSize: 24,
    fontWeight: "bold",
  },
  specialist_doc_text: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: "#b2bec3",
    width: 270,
    marginLeft: 40,
    borderRadius: 5,
  },
  specialist_gen_text: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: "#b2bec3",
    width: 270,
    marginLeft: 40,
    borderRadius: 5,
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
export default DoctorScreen;
// http://www.json-generator.com/api/json/get/cgnbFUYRTS?indent=2
