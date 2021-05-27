import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Arthritis extends Component {
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
          Arthritis
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H1_Arthritis.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Arthritis is a term often used to mean any disorder that affects
              joints. Symptoms generally include joint pain and stiffness. In
              some types other organs are also affected.Onset can be gradual or
              sudden.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Injury</Text>
            <Text>2.Abnormal metabolism</Text>
            <Text>3.Inheritance</Text>
            <Text>4.Infections</Text>
            <Text>5.immune System dysfunction</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Swelling</Text>
            <Text>2.joint Stiffness</Text>
            <Text>3.Aching around the joint</Text>
            <Text>4.Nability to use the hand or walk </Text>
            <Text>5.Stiffness</Text>
            <Text>6.Weight loss</Text>
            <Text>7.Poor Sleep</Text>
            <Text>8.Muscle aches and pains</Text>
            <Text>9.Tenderness</Text>
            <Text>10.Difficulty moving the joint</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1Turmeric:</Text>
            <Text>
              Take 500 mg to 1,000 mg turmeric capsules three times per day or
              drink fresh turmeric juice. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Ginger:</Text>
            <Text>
              Take a half-teaspoon of powdered ginger or up to 30 grams (about 6
              teaspoons) of fresh ginger once a day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3.Apple Cider Vinegar :
            </Text>
            <Text>
              Mix one teaspoon each of apple cider vinegar and honey in a cup of
              warm water. Drink it daily in the morning.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4.Epsom salt:
            </Text>
            <Text>
              Add two cups of Epsom salt to warm bath water and soak in it.{" "}
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5.Cinnamon:</Text>
            <Text>
              Make a paste of cinnamon and honey and massage it gently on the
              painful area.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5.cherries:</Text>
            <Text>
              Eat eight to 10 cherries daily. You can use canned, frozen or
              fresh cherries depending upon which is easily available.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Arthritis;

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
    padding: 10,
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
