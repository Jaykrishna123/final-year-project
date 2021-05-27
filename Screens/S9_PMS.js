import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class PMS extends Component {
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
          Premenstrual syndrome (PMS){" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/S9_PMS.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Premenstrual syndrome (PMS) refers to physical and emotional
              symptoms that occur in the one to two weeks before a woman's
              period. Symptoms often vary between women and resolve around the
              start of bleeding. Common symptoms include acne, tender breasts,
              bloating, feeling tired, irritability, and mood changes.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Anemia</Text>
            <Text>2.Endometriosis </Text>
            <Text>3.Thyroid disease</Text>
            <Text>4.Irritable bowel syndrome </Text>
            <Text>5.Chronic fatigue syndrome</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Acne</Text>
            <Text>2.Swollen or tender breasts</Text>
            <Text>3.Feeling tried</Text>
            <Text>4.Trouble Sleeping</Text>
            <Text>5.Upset stomach,bloating ,constipation,or diarrhea</Text>
            <Text>6.Headache or backache</Text>
            <Text>7.Appetite changes or food cravings</Text>
            <Text>8.Urinating small amounts of urine</Text>
            <Text>9.Jion or muscle pain</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Ginger:</Text>
            <Text>
              {" "}
              Add 1 teaspoon of grated ginger to a cup of boiling water. Let it
              simmer for a few minutes. Strain and add honey to taste. Drink 2
              or 3 cups of this ginger tea daily, at least for a week before
              your period.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Chasteberry:
            </Text>
            <Text>
              Take 400 mg of standard extract of this herb daily.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Apple Cider Vinegar:
            </Text>
            <Text>
              Mix 1 to 2 teaspoons of raw, unfiltered apple cider vinegar in a
              glass of water. Add a little raw, organic honey. Drink this
              solution once or twice daily.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Flaxseeds:
            </Text>
            <Text>
              Consume 1 tablespoon of freshly ground flaxseeds twice daily.
              {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default PMS;

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
