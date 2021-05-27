import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class H11_Tooth_Pain extends Component {
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
          ToothPain{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H11_Tooth_Pain.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              A toothache or tooth pain or dental pain is a pain in or around
              the teeth and jaws that's may caused by dental diseases or pain
              referred to the teeth by non-dental diseases.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Tooth Decay</Text>
            <Text>2.A Cracked tooth</Text>
            <Text>3.Infected gums</Text>
            <Text>
              4.Repetitive motions,such as chewing gums or grinding teeth
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Pain eith chewing</Text>
            <Text>2.Swelling around the tooth</Text>
            <Text>3.Fever or headache</Text>
            <Text>4.Injury to traumma to the area</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Clove oil:
            </Text>
            <Text>
              Drip a drop or two of the oil onto a cotton ball and apply it to
              the throbbing tooth.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Salt water:
            </Text>
            <Text>
              Swish a small amount of salt water or saline solution in your
              mouth for 30 seconds. You can repeat once or twice.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Peppermint tea :
            </Text>
            <Text>
              Put 1 teaspoon dried peppermint leaves in 1 cup boiling water and
              steep for 20 minutes. After the tea cools, swish it around in your
              mouth, then spit it out or swallow. Repeat same process as often
              as needed.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Garlic:</Text>
            <Text>
              Mix a crushed garlic clove (or garlic powder) with some table salt
              or black salt and apply it directly on the affected tooth to
              alleviate the pain. Repeat same process as often as needed.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default H11_Tooth_Pain;

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
