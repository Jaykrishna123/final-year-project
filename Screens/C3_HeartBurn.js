import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class HeartBurn extends Component {
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
          HeartBurn
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/C3_HeartBurn.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Heartburn, also known as acid indigestion, is a burning sensation
              in the central chest or upper central abdomen. The pain often
              rises in the chest and may radiate to the neck, throat, or angle
              of the jaw.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              The Causes of HeartBurn is excessive flow of gastric contents back
              into the esophagus. Normally ,there is an occasional backflow into
              the esophagus with no symptoms, The acidic gastric contents ,when
              presnt in large amounts. irritate the esophagus and cause the
              symptoms of heartburn
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>
              1. A burning pain in the chest that usually occurs after eating.
            </Text>
            <Text>2.Pain that worens when lying down or bending over.</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Apple Cider Vinegar:
            </Text>
            <Text>
              {" "}
              Add 2 tsp of Braggs Apple Cider Vinegar to ¼ cup of water and
              drink. Repeat every 5 minutes until heartburn subsides.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Lemon Juice:
            </Text>
            <Text>
              Take one tablespone juice of organic lemon into a glass. If you
              can drink it straight, do it. Otherwise, add in ¼ cup of water and
              take like a shot.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Banking Soda:
            </Text>
            <Text>
              Just mix one teaspoon of baking soda in a glass of water. Drink it
              for instant relief.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Mint:</Text>
            <Text>
              Add one tablespoon of crushed mint leaves to a cup of water. Drink
              it two to three times a day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Other Remedy:
            </Text>
            <Text>Ginger, aloe vera juice, fennel seeds.{"\n"}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default HeartBurn;

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
