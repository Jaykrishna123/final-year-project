import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Sprain extends Component {
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
          Sprain
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H2_Sprain.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              A sprain is an injury to single or many ligament; stretching or a
              tearing. The severity of the injury will depend on the extent of
              injury to a single ligament and the number of ligaments involved.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Trauma to a joint</Text>
            <Text>2.Fall</Text>
            <Text>3.Blow to the body</Text>
            <Text>4.Overuse of muscles and tendons</Text>
            <Text>5.Accidents</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Swelling</Text>
            <Text>2.Pain</Text>
            <Text>3.Decresed range of motion</Text>
            <Text>4.Brusing </Text>
            <Text>5.Instability of the joint</Text>
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
export default Sprain;

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
