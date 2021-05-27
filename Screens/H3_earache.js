import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class H3_earache extends Component {
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
          {" "}
          Ear Pain{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H3_earache.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Ear pain, also known as otalgia or earache, is pain in the ear.
              Primary ear pain is pain that originates inside the ear. Referred
              ear pain is pain that originates from outside the ear.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              1.Accumulation of moisture in the ear canal due to swimming or
              showers
            </Text>
            <Text>2.An injury in the outer ear canal or eardrum</Text>
            <Text>3.Infection in the outer ear canal</Text>
            <Text>4.Throat or nose infection</Text>
            <Text>5.Common cold</Text>
            <Text>6.Ear disease</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Otitis Externa and otitis media</Text>
            <Text>2.Chronic pain due to pulling of ear's outer rim </Text>
            <Text>3.Hear-loss</Text>
            <Text>4.Buzzingand singing sound in the ear </Text>
            <Text>5.Fever</Text>
            <Text>6.Swelling and itchness in the ear </Text>
            <Text>7.Ear Blockage</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Olive Oil:
            </Text>
            <Text>
              Put 3-4 drops of lukewarm olive oil as ear drops into the ear
              canal.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Garlic:</Text>
            <Text>
              Heat one teaspoon of minced garlic in two tablespoons of sesame
              oil. Cool and filter the oil. Put 2-3 drops of this garlic oil in
              the aching ear.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Place Heating Pad:
            </Text>
            <Text>
              Take a hot water bottle or damp a small washcloth in hot water and
              place it on the aching ear. The warmth gives a great relief from
              earache while improving the blood circulation.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Ginger:</Text>
            <Text>
              Mix one teaspoon of fresh grated ginger root with two tablespoons
              of olive oil. Leave it to infuse for 5 to 10 minutes and then put
              a few drops of the oil in the aching ear.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Basil Leaves:
            </Text>
            <Text>
              Crush some basil leaves and extract its juice. Put at least 2
              drops of it into the infected ear to get relief from earache.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>6. Onion:</Text>
            <Text>
              Grate an onion and take out its juice. Put 2-3 drops of it into
              the affected ear at least 2-3 times in a day. Onion is a good
              antiseptic and cures earache easily.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default H3_earache;

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
