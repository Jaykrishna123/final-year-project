import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class AbscessTooth extends Component {
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
          Abscess Tooth
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H1_Abscess_Tooth.png")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              An abscessed tooth is a dental condition in which the nerve of the
              tooth, also referred to as the dental pulp, has become infected.
              The infection usually occurs when a dental cavity (tooth decay)
              goes untreated and spreads deep within the tooth. The infection
              can also occur from a broken or cracked tooth where the dental
              pulp is exposed to the oral environment.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Infection</Text>
            <Text>2.Deep cavity or toth decay</Text>
            <Text>3.Gum disease</Text>
            <Text>4.Cracked tooth </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Pain</Text>
            <Text>2.Swelling</Text>
            <Text>3.Gum redness</Text>
            <Text>4.Bad taste</Text>
            <Text>5.Fever</Text>
            <Text>6.Swollen lymph nodes</Text>
            <Text>7.Pain when you chew</Text>
            <Text>8.Jaw Pain</Text>
            <Text>9. Bad breath</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Garlic:</Text>
            <Text>
              Put a fresh garlic clove in your mouth and crush it with your
              teeth. Chew it until the pain subsides. Spit it out and rinse your
              mouth with warm water. To reduce the residual odor, you can add a
              few drops of clove oil to the warm water.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Salt water rinse:
            </Text>
            <Text>
              Mix 1/2 teaspoon of normal table salt with 1/2 cup of warm tap
              water. Rinse your mouth with the salt water; try to swish it
              around inside your mouth for at least two minutes and Spit the
              water out. Repeat up to three times per day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Baking soda:
            </Text>
            <Text>
              Mix 1/2 tablespoon of baking soda with 1/2 cup of water and a
              pinch of salt. Swish the mixture in your mouth for up to five
              minutes. Spit out and repeat until you have finished the mixture
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Clove:</Text>
            <Text>
              Dip a cotton ball in clove oil and hold it on the painful area for
              a few minutes.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Apple Cider Vinegar
            </Text>
            <Text>
              Mix 1 teaspoon of raw, unfiltered apple cider vinegar in a glass
              of water and drink it twice daily..{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Cold Compress:
            </Text>
            <Text>
              Place ice cubes in a dry towel.. Hold the compress against your
              skin near the affected area. The compress can be used for
              15-minute intervals.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default AbscessTooth;

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
