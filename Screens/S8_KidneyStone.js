import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class KidneyStone extends Component {
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
          Kidney Stone
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/S8_KidneyStone.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              A kidney stone, also known as a renal calculus or nephrolith, is a
              solid piece of material which is formed in the kidneys from
              minerals in urine. Kidney stones typically leave the body in the
              urine stream, and a small stone may pass without causing symptoms.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Heredity</Text>
            <Text>2.Geographical location</Text>
            <Text>3.Bad diet</Text>
            <Text>4.Medications </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Severe pain in the side and back ,below the ribs.</Text>
            <Text>2.Pain on urination</Text>
            <Text>3.Pink,red and brown urine</Text>
            <Text>4.Cloudy or foul-smelling urine</Text>
            <Text>5.Nausea and vomitting</Text>
            <Text>6.Urinating more often than usual</Text>
            <Text>7.Fever and chills if an infection is presnt</Text>
            <Text>8.Urinating small amounts of urine</Text>
            <Text>9.Persistent need to urine</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Horsetail:
            </Text>
            <Text>
              {" "}
              Horsetail tea is an effective natural remedy for kidney stones.
              Drink up to 3-4 cups of horsetail tea daily or 2 grams of the herb
              in capsule form daily.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Apple Cider Vinegar:
            </Text>
            <Text>
              Mix 2 tablespoons of raw organic apple cider vinegar and one
              teaspoon of honey in one cup of warm water and drink this a few
              times a day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Dandelion Root:
            </Text>
            <Text>
              Organic dandelion root is a great kidney tonic and cleanser.
              Taking up to 500 mg twice a day may be beneficial.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Nettle Leaf:
            </Text>
            <Text>
              Add two teaspoons of dried nettle leaf to a cup of hot water. Let
              it steep for 10 minutes and then strain it and drink.{"\n"}
            </Text>

            <Text>5. Lemon juice and olive oil{"\n"}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default KidneyStone;

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
