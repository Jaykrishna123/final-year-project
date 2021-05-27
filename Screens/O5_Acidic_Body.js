import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Acidic_Body extends Component {
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
          Acidic Body{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/O5_Acidic_Body.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Acidic bodies are unhealthy bodies. When the body is overly
              acidic, it creates an unwanted environment in which illness,
              bacteria, and yeast thrive. It also takes minerals from vital
              organs and bones to neutralize the acid and remove it from the
              body.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Long gap between meals</Text>
            <Text>2.Empty Stomach</Text>
            <Text>3.Excessive intake of tea,coffee</Text>
            <Text>4.Smoking or alcohol</Text>
            <Text>5.Stress ,lack of sleep etc</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Burning sensation in the stomach</Text>
            <Text>2.Regurgitation</Text>
            <Text>3.Reastlessness</Text>
            <Text>4.Belching</Text>
            <Text>5.Nausea</Text>
            <Text>6.Bad Breath</Text>
            <Text>7.Indigenstion</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Lemon Water:
            </Text>
            <Text>
              Mix the juice of half of an organic lemon into a glass of lukewarm
              water. Add 2 teaspoons of raw honey and mix thoroughly. Drink this
              daily, first thing in the morning on an empty stomach, to flush
              your system.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Avoid Highly Acidic Diet:
            </Text>
            <Text>
              Eliminate these highly acidic foods from your diet: Alcohol,
              Coffee, Soda, Energy drinks, White flour, Red meat, Milk, etc.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Organic Foods:
            </Text>
            <Text>
              Organic foods are free of genetically modified organisms and help
              you stay clear of pesticides, chemicals and other contaminants
              that can make your body’s pH level more acidic.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Apple Cider Vinegar:
            </Text>
            <Text>
              Mix 1 to 2 tablespoons of raw, unfiltered apple cider vinegar into
              a glass of lukewarm water. Mix in a little honey to improve the
              taste as well to enhance the health benefits. Drink 1 to 2 glasses
              of this health tonic daily.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Baking Soda:
            </Text>
            <Text>
              Mix together ½ teaspoon of baking soda and 2 tablespoons of lemon
              juice. Add 1 cup of water to it and drink it immediately in one
              sitting.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Acidic_Body;

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
