import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class H10_tinnitus extends Component {
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
          Tinnitus{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H10_tinnitus.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Tinnitus is the hearing of sound when no external sound is
              present. While often described as a ringing, it may also sound
              like a clicking, hiss or roaring. Rarely, unclear voices or music
              are heard.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Infection</Text>
            <Text>2.Trauma to the ear</Text>
            <Text>3.Aging</Text>
            <Text>4.Loud noise Exposure</Text>
            <Text>5.Some Medication</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Ringing</Text>
            <Text>2.Buzzing</Text>
            <Text>3.Roaring</Text>
            <Text>4.Clicking</Text>
            <Text>5.Hissing</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Avoid possible irritants:
            </Text>
            <Text>
              Reduce your exposure to things that may make your tinnitus worse.
              Common examples include loud noises, caffeine and nicotine.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Cover up the noise:
            </Text>
            <Text>
              In a quiet setting, a fan, soft music or low-volume radio static
              may help mask the noise from tinnitus.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Manage stress:
            </Text>
            <Text>
              Stress can make tinnitus worse. Stress management, whether through
              relaxation therapy, biofeedback or exercise, may provide some
              relief.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Reduce your alcohol consumption:
            </Text>
            <Text>
              Alcohol increases the force of your blood by dilating your blood
              vessels, causing greater blood flow, especially in the inner ear
              area.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default H10_tinnitus;

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
