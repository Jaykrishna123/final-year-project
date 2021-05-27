import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Dry_Skin extends Component {
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
          Dry Skin
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk8_Dry_Skin.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Dryness occurs when the skin loses moisture or cannot retain it.
              Heated air indoors during winter, bathing too often and using
              harsh soaps can contribute to dry skin. The University of Maryland
              Medical Center reports that dry skin occurs most frequently on the
              lower legs, sides of the abdomen and thighs, although the
              condition may appear anywhere on the body.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Cold weather</Text>
            <Text>2.Heredity</Text>
            <Text>3.Use of harsh soaps</Text>
            <Text>4.Air conditioning </Text>
            <Text>5.Bathing with the hot water</Text>
            <Text>6.Excessive sun-exposure</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>Dry and rough skin</Text>
            <Text>Flaky skin</Text>
            <Text>itching </Text>
            <Text>Red patches</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Honey:</Text>
            <Text>
              Rub some honey all over your face and body and sit for 10 minutes.
              Then, take a shower. You will come out with a soft glowing skin,
              which will remain glowy throughout the day.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Warm Milk:
            </Text>
            <Text>
              Mix 1-2 teaspoon of almond oil in a glass, full of tepid milk.
              Take it before sleeping at night. This will make your skin oily
              and nourished from within while preventing its dryness.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Avocado Mask:
            </Text>
            <Text>
              Take a ripe avocado and make puree out of it. Now, mix it with 2
              teaspoons of curd along with ½ a teaspoon of honey. Put this mask
              on your face or any dry part of your body. After 10 minutes, wash
              it off with water.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Olive Oil:
            </Text>
            <Text>
              Mix two tablespoons of olive oil, four tablespoons of fine brown
              sugar, and one tablespoon of honey. Rub this homemade scrub on
              your dry skin using light, circular motions for a few minutes.
              Take a shower and then apply a light moisturizer.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Coconut Oil:
            </Text>
            <Text>
              Liberally apply warm coconut oil all over your body before going
              to sleep. Wash it off in the morning. Do this daily to make your
              skin soft and smooth.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Dry_Skin;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 20,
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
