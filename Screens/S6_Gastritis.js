import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Gastritis extends Component {
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
          Gastritis
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/S6_Gastritis.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Gastritis is inflammation of the lining of the stomach. It may
              occur as a short episode or may be of a long duration. The most
              common symptom is upper abdominal pain. Other symptoms include
              nausea and vomiting, bloating, loss of appetite and heartburn.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Bacterial,viral and parasitic infections</Text>
            <Text>2.Certain drugs</Text>
            <Text>3.Alcohol</Text>
            <Text>4.Fungal infections </Text>
            <Text>5.Allergic reactions</Text>
            <Text>6.Stress Reaction</Text>
            <Text>7.Radiation</Text>
            <Text>8.Trauma</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Nausea</Text>
            <Text>2.Vomiting</Text>
            <Text>3.Burning pain the abdomen</Text>
            <Text>4.Indigestion</Text>
            <Text>5.A sensation of fullness after meals</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Carom Seeds::
            </Text>
            <Text>
              {" "}
              Mix together 1 teaspoon each of carom seeds and dried ginger with
              a little bit of black salt. Take 1 teaspoon of this mixture with a
              glass of warm water 3 times a day..{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Ginger:</Text>
            <Text>
              A small piece of ginger can be chewed some time before having
              meals. This stimulates digestion and also treats gastritis
              infection. About 120gm of ginger root taken four times every day
              for about eight weeks is helpful in eliminating bacteria and
              reducing recurrence of gastritis. : Ginger may interfere with
              blood-thinning and high blood pressure medications.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Yogurt:</Text>
            <Text>
              Eat 2 to 3 cups of plain probiotic yogurt daily until you get
              relief.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Peppermint:
            </Text>
            <Text>
              Chew fresh peppermint leaves or add them to your soups, salads and
              smoothies.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Vegetable juice:
            </Text>
            <Text>
              Mix two hundred millimetre of spinach juice with about 100 ml of
              carrot juice and drink this for best results.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Gastritis;

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
