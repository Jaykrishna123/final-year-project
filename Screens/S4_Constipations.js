import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Constipations extends Component {
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
          Constipations
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/S4_Constipations.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Constipation is a very common digestive disorder that affects
              people of all ages. Constipation causes difficulty passing stools
              and may even lead a person to strain too much to empty the
              excessively hard stools.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Improper intake of fiber-rich foods.</Text>
            <Text>2.inadequate intake of water and other fluids.</Text>
            <Text>3.Irregular habits of defecation.</Text>
            <Text>4.Excess intake of daily products.</Text>
            <Text>5.Stress</Text>
            <Text>6.Eating disorders</Text>
            <Text>Pregnancy</Text>
            <Text>Colon cancer</Text>
            <Text>Hypothyroidism</Text>
            <Text>Less Physical Activity</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Difficulty in having a bowel movement</Text>
            <Text>2.Hard faeces</Text>
            <Text>3.Heat burn</Text>
            <Text>4.Abdominal Pain</Text>
            <Text>5.Straining When Passing a stool</Text>
            <Text>6.Intenstial Pain</Text>
            <Text>7.Vomiting</Text>
            <Text>8.Sensation of fullness after a bowel movement</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1.Lemon:</Text>
            <Text>
              Just add a teaspoon of lemon juice in a glass of lukewarm water
              with a pinch of salt, and drink it on an empty stomach after
              waking up in the morning.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Honey:</Text>
            <Text>
              Consume two teaspoons of honey three times a day. You can also mix
              one tablespoon each of honey and lemon juice in a glass of warm
              water. Drink it every morning on an empty stomach.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Flax Seed
            </Text>
            <Text>
              Simply eat two to three tablespoons of ground flax seed with a
              glass of water.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Olive Oil:
            </Text>
            <Text>
              Mix a tablespoon of olive oil with a teaspoon of lemon juice and
              have it regularly in order to get relief from constipation.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Amla Powder:
            </Text>
            <Text>
              Have a teaspoon of amla powder along with a glass of lukewarm
              water. Take this mixture before taking breakfast in the morning or
              before going to bed at night.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>6. Fennel: </Text>
            <Text>
              Take one cup of fennel seeds and dry roast them. Then, grind them
              and sieve the mixture. Store this tasty and digestive powder in a
              jar. Take half a teaspoon of this powder daily with warm water.
              {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Constipations;

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
    width: 200,
    height: 200,
    resizeMode: "center",
    alignItems: "center",
  },
  Text: {
    padding: 10,
    fontSize: 89,
  },
});
