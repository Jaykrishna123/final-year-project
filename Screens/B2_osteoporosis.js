import React, { Component } from "react";

import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

class osteoporosis extends Component {
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
          Osteoporosis
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/B2_osteoporosis.png")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Osteoporosis is a disease where decreased bone strength increases
              the risk of a broken bone. It is the most common reason for a
              broken bone among the elderly. Bones that commonly break include
              the back bones, the bones of the forearm, and the hip.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Confinement to the bed</Text>
            <Text>
              2.Certain medical conditions like chronic kideny disease, chornic
              rheumatoid arthirtis,and hyperparathroidism.
            </Text>
            <Text>
              3.Eating disorders are also a possible cause of osteoporosis as it
              gives rise to various nutritional deficiencies.
            </Text>
            <Text>
              4.A vitimin D defiency is also likely to contribute to the
              development of osteoporosis.
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Back Pain</Text>
            <Text>2.Loss of Height and stooped posture.</Text>
            <Text>3.A Curved upper back</Text>
            <Text>
              4.Broken bones that might occur with a minor injury,especially in
              the hip,spine camera .gif and wrist
            </Text>
            <Text>4.Numbness around the buttocks </Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Apples:</Text>
            <Text>
              Apples are rich in boron, a trace mineral that helps the body hold
              on to calcium, which is the building block of bones as well as
              muscles. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Coconut Oil:
            </Text>
            <Text>
              Consuming three tablespoons of virgin coconut oil daily can help
              prevent osteoporosis and five tablespoons daily can help reverse
              it.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3.Almonds :</Text>
            <Text>
              In the morning, blanche them and grind them to a fine paste. Mix
              the paste into a glass of milk and drink this, everyday.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4.Seasame Oil:
            </Text>
            <Text>
              Chew a handful of roasted white sesame seeds daily in the morning.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Fish Oil:
            </Text>
            <Text>
              Take 1,000 mg of fish oil supplements once daily with a meal.
              Note: People taking blood-thinning medication should not take fish
              oil supplements without consulting a doctor.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default osteoporosis;

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
