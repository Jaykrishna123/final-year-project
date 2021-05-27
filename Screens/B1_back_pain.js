import React, { Component } from "react";

import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

class back_pain extends Component {
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
          Back Pain/Backache
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/B1_back-pain.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Back pain is pain felt in the back. Episodes of back pain may be
              acute, sub-acute, or chronic depending on the duration. The pain
              may be characterized as a dull ache, shooting or piercing pain, or
              a burning sensation. The pain may radiate into the arms and hands
              as well as the legs or feet, and may include paresthesia (tingling
              with no apparent cause), weakness or numbness in the legs and
              arms.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Muscle or Ligament</Text>
            <Text>2.Bulging or ruptured disks</Text>
            <Text>3.Arthritis</Text>
            <Text>4.Skeletal irregularities</Text>
            <Text>5.Osteoporosis</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Weight Loss</Text>
            <Text>2.Elevated body temperature</Text>
            <Text>3.Numbness around the anus</Text>
            <Text>4.Numbness around the buttocks </Text>
            <Text>5.Inflammation on the back</Text>
            <Text>6.A recent injury,blow or trauma to your back</Text>
            <Text>7.Urinary Incountinence</Text>
            <Text>8.Pain down to legs</Text>
            <Text>9.Pain Reaches below the knees</Text>
            <Text>10.Diffuculty urinating -passing urine is hard</Text>
            <Text>11.numbness around the genitals</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Ice:</Text>
            <Text>
              Wrap about a cup of ice cubes in a towel. Apply the compress to
              the injured area for 15 to 20 minutes. Repeat the process every
              two to three hours. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Reset:</Text>
            <Text>
              Avoid activities that cause pain, swelling or discomfort. But
              don't avoid all physical activity. Instead, give yourself relative
              rest.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3.Elevation :
            </Text>
            <Text>
              Raise your ankle above the level of your heart for 2 to 3 hours a
              day if possible to decrease swelling and bruising.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4.Onions:</Text>
            <Text>
              Chop onions, wrap them in a muslin cloth and place on the sprained
              area.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5. cabbage:</Text>
            <Text>
              Warm the outer leaves of a cabbage in hot water and bandage them
              around the sprain.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>6. Garlic:</Text>
            <Text>
              Mix one teaspoon garlic oil and one teaspoon of almond oil.
              Massage the affected area with the mixture two or three times a
              day. Repeat daily until you recover fully. This remedy can also be
              used for treating arthritis and rheumatism.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Olive oil:
            </Text>
            <Text>
              Add one tablespoon of olive oil to one egg yolk and mix it well.
              Apply this mixture on the affected area and cover it with a cotton
              pad. Keep it bandaged for two days. Repeat the process for a few
              days.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default back_pain;

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
