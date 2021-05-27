import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Ringworm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#54a0ff"
          translucent={true}
        />
        <Text style={{ padding: 10, fontSize: 20, textAlign: "center" }}>
          Ringworm
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk12_Ringworm.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Dermatophytosis, also known as ringworm, is a fungal infection of
              the skin. Typically it results in a red, itchy, scaly, circular
              rash. Hair loss may occur in the area affected.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              Ringworm infection is caused by fungus .Fungi that cause ringworm
              live and spread on theouter layer of skin. Ringworm is not caused
              by a worm other parasite.
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Red circular rashes</Text>
            <Text>2.Irritation and itchiness</Text>
            <Text>3.Itching</Text>
            <Text>4.Loss of hair in patches</Text>
            <Text>5.Scaling</Text>
            <Text>6.Crusting</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1.Garlic:</Text>
            <Text>
              Crush two garlic cloves. Rub them on the ringworm rash several
              times a day. Do this for four to five days or until the condition
              improves.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Apple cider Vinegar:
            </Text>
            <Text>
              Soak a cotton ball in apple cider vinegar and gently pat it on the
              ringworm. Repeat this for 3-5 times every day for at least three
              days.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Raw papaya:
            </Text>
            <Text>
              Cut a slice of raw papaya and rub it on the ringworm. This is one
              of the best ringworm cures as papaya contains enzymes that quickly
              heal the infection.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Tea tree oil:
            </Text>
            <Text>
              Put a few drops of tea tree oil on a cotton ball and dab it on the
              affected area. Do this two or three times a day for a week or so.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3.Turmeric:</Text>
            <Text>
              Make a paste by mixing turmeric and water. Turmeric is a good
              antibiotic and is a good home remedy for ringworm in children.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Vinegar and salt:
            </Text>
            <Text>
              Make a paste of salt and white vinegar. Apply it on the affected
              area and leave it on for about five minutes. Do this two or three
              times a day for a week or until the infection goes away.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Ringworm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    backgroundColor: "#f5fffa",
  },
  container1: {
    padding: 10,
    backgroundColor: "#f5fffa",
  },
  container2: {
    padding: 10,
    backgroundColor: "#f5fffa",
  },
  container3: {
    padding: 10,
    backgroundColor: "#f5fffa",
  },
  container4: {
    padding: 10,
    backgroundColor: "#f5fffa",
  },
  container5: {
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#f5fffa",
  },
  Image: {
    justifyContent: "center",
    width: 800,
    height: 500,
    resizeMode: "center",
    alignItems: "center",
  },
  Text: {
    padding: 10,
    fontSize: 89,
  },
});
