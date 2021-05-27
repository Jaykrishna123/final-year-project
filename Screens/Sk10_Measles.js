import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Measles extends Component {
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
          Measles
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk10_Measles.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Measles is a highly contagious infection caused by the measles
              virus. Initial signs and symptoms typically include fever, often
              greater than 40 °C (104.0 °F), cough, runny nose, and inflamed
              eyes.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              The Cause of measles in a virus that repicates in the nose and
              throat of an infected child or adult. When someone with measles
              coughs,sneezes or talks,infected droplet spray into the air,when
              other people can inhale them.
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Cough</Text>
            <Text>2.Fever</Text>
            <Text>3.Red eyes</Text>
            <Text>4.Light Sensitivity</Text>
            <Text>5.Muscle aches</Text>
            <Text>6.Runny nose</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Take it easy:
            </Text>
            <Text>Get rest and avoid busy activities.{"\n"} </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Sip something:
            </Text>
            <Text>
              Drink plenty of water, fruit juice and herbal tea to replace
              fluids lost by fever and sweating.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Lemon juice:
            </Text>
            <Text>
              The freshly squeezed juice of one lemon mixed with water can be an
              effective cure for measles.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Garlic:</Text>
            <Text>
              Garlic also can be an effective natural cure for measles. Powder
              the cloves of garlic and mix with honey and this can be had daily
              for better results.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Measles;

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
