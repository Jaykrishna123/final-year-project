import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Insomina extends Component {
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
          Insomina{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/O4_Insomina.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Insomnia is a sleep disorder. People with insomnia have trouble
              sleeping: difficulty falling asleep, or staying asleep as long as
              desired.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Use of psychoactive drugs</Text>
            <Text>2.Use of or withdrawal from alcohol andother sedatives</Text>
            <Text>3.Previous thoracic surgery</Text>
            <Text>4.Heat disease</Text>
            <Text>5.Restless legs syndrome</Text>
            <Text>6.Periodic limb movement disorder</Text>
            <Text>7.Pooe sleep hygiene</Text>
            <Text>8.Pain,injury</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Not feeling well rested after a night's sleep</Text>
            <Text>2.Daytime tiredness or sleepiness</Text>
            <Text>3.Ongoing worries about sleep</Text>
            <Text>4.Irritability,depression or anxiety</Text>
            <Text>5.Tension Headache</Text>
            <Text>6.Increased errors or accidents</Text>
            <Text>7.Awakening too early</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Exercise and stay active:
            </Text>
            <Text>
              Activity helps promote a good night's sleep. Get at least 20 to 30
              minutes of vigorous exercise daily at least five to six hours
              before bedtime.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Avoid or limit naps:
            </Text>
            <Text>
              Naps can make it harder to fall asleep at night. If you can't get
              by without one, try to limit a nap to no more than 30 minutes and
              don't nap after 3 p.m.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Check your medications:
            </Text>
            <Text>
              Check all of your medicines with your doctor to see if they could
              be affecting your sleep. To help avoid sleep problems, you may be
              able to adjust your dose or change the time of day you take your
              medicine.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4.Stick to a sleep schedule :
            </Text>
            <Text>
              Keep your bedtime and wake time consistent from day to day,
              including on weekends.{"\n"}
            </Text>

            <Text>
              5. Keep your bedroom quiet, dark, and cool. Try using a sleep mask
              and earplugs to help you sleep.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Insomina;

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
    width: 500,
    height: 500,
    resizeMode: "center",
    alignItems: "center",
  },
  Text: {
    padding: 10,
    fontSize: 89,
  },
});
