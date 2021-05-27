import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class hoarseness extends Component {
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
          Hoarseness{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H6_hoarseness.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Laryngitis is an inflammation of the larynx. It causes hoarse
              voice or temporary loss of the voice due to irritation of the
              vocal folds (vocal cords). Laryngitis is one possible cause of
              dysphonia, the medical term for a vocal disorder.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              Causes of laryngitis include upper respiratory infection or
              thecommon cold;overuse of the vocal cords by talking ,singing or
              shouting; gastroesophagel reflux disease. causingreflux
              laryngitis;smoking exposure to secoundhand smoke;or exposure to
              polluted air.
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Hoarseness</Text>
            <Text>2.Weak voice or voice loss</Text>
            <Text>3.Dry Throat</Text>
            <Text>4.Dry cough </Text>
            <Text>5.Sore throat </Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1.Apple cider vinegar:
            </Text>
            <Text>
              Mix ¼ cup of apple cider vinegar and 2 tablespoons of honey.
              Consume it multiple times a day. You can add ¼ cup of lukewarm
              water to it as well, as per your convenience.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Ginger :</Text>
            <Text>
              Try sucking on a few candied gingers throughout the day or simply
              eat a few thin slices of fresh ginger root.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Mouthwash:
            </Text>
            <Text>
              Mouthwash is good for you, as it helps you get rid of the bacteria
              and virus present in your mouth and throat, thus, alleviate
              laryngitis.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Warm Salt Water:
            </Text>
            <Text>
              Just add one-half teaspoon of salt to a cup of warm water and
              gargle with it. Do this several times a day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5.Garlic</Text>
            <Text>
              Chew a raw garlic clove slowly and then swallow it.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>6. Lemon:</Text>
            <Text>
              Squeeze the juice of a lemon into a glass of warm water. Add
              one-half teaspoon of sea salt (if you do not have sea salt then
              just use table salt). Gargle with this solution several times a
              day.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default hoarseness;

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
