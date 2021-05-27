import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class indigestion extends Component {
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
          Indigestion
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/S7_Indigenstion.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Indigestion, also known as dyspepsia, is a condition of impaired
              digestion. Symptoms may include upper abdominal fullness,
              heartburn, nausea, belching, or upper abdominal pain. People may
              also experience feeling full earlier than expected when eating.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Over-eating</Text>
            <Text>2.Excess intake of fatty or spicy foods</Text>
            <Text>3.Alcohol</Text>
            <Text>4.Smoking </Text>
            <Text>5.Stress</Text>
            <Text>6.Gastroesophageal Reflux disease</Text>
            <Text>7.Ulcers</Text>
            <Text>8.Stomach infections</Text>
            <Text>9.Thyroid</Text>
            <Text>10.Pancreatitis</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Bloating</Text>
            <Text>2.Heartburn</Text>
            <Text>3.Belching</Text>
            <Text>4.Nausea</Text>
            <Text>5.Vomiting</Text>
            <Text>6.Burning sensation in the stomach</Text>
            <Text>7.Pain in the abdominal area</Text>
            <Text>8.Acid regurgitation</Text>
            <Text>9. Growling Stomach</Text>
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
              Add one tablespoon of raw, unfiltered apple cider vinegar to a cup
              of water. Mix in one teaspoon of raw honey. Drink this solution
              two to three times a day for quick relief.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Fennel Seeds:
            </Text>
            <Text>
              You can drink fennel tea, made by steeping two teaspoons of
              crushed fennel seeds in a cup of hot water. Or, simply chew a
              spoonful of fennel seeds for symptom relief.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Ginger:</Text>
            <Text>
              Ginger is justifiably famous for setting stomach upset and
              improving digestion. You can take capsules with meals, eat some
              candied ginger or brew up a cup of ginger tea.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Baking Soda:
            </Text>
            <Text>
              Mix ½ teaspoon of baking soda in 1 glass of water. Drink it in
              order to neutralize the effect of excessive acids in the stomach.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Cinnamon :{" "}
            </Text>
            <Text>
              Put ½ teaspoon of cinnamon powder into a cup of boiling water and
              drink it as tea.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Aniseed :{" "}
            </Text>
            <Text>
              Munch on some aniseeds after taking meals to get relief from
              indigestion.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              7. Peppermint :{" "}
            </Text>
            <Text>
              Add a few drops of peppermint extract in a glass of water, and
              drink it to cure the indigestion.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>8. Lemon :</Text>
            <Text>
              Mix a tablespoon of lemon juice in 1 cup of warm water. Lemon
              helps to fight against the indigestion-causing bacteria.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default indigestion;

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
