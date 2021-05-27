import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Varicose_Veins extends Component {
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
          Varicose Veins
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H3_VaricoseVeins.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Varicose veins are veins that have become enlarged and twisted.
              Any vein may become varicose, but the veins most commonly affected
              are those in your legs and feet, which have become widened,
              bulging, and twisted.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              1.Age: Generally ,most elderly indiviuals show some degree of
              varicose occurence.
            </Text>
            <Text>
              2.Pregnency causes increase in hormone levels and blood valume
              which in turn causes vein to enlarge.
            </Text>
            <Text>3. Prolonged standing</Text>
            <Text>4. Obesity or distended belly</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Veins that are dark purple or blue in color.</Text>
            <Text>2.Aching ,heavy and uncomfortable legs.</Text>
            <Text>3. Swollen feet and ankles</Text>
            <Text>4.Muscle cramp in your legs.</Text>
            <Text>5. Bleending from varicose veins.</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>
            <Text>
              1. Add one teaspoon of cayenne pepper powder to a cup of hot water
              and stir it well and drink this three times a day.{"\n"}{" "}
            </Text>

            <Text>
              2. Eat a balanced diet that includes plenty of fish and fresh
              fruits and vegetables. The diet also has to be low in fat and
              carbohydrates. {"\n"}
            </Text>

            <Text>
              3. Avoid sugar, ice cream, fried foods, peanuts, junk foods,
              cheeses, tobacco, salt, alcohol, animal protein, and processed and
              refined foods. {"\n"}
            </Text>

            <Text>
              4. Do not wear tight clothes because they restrict blood flow.{" "}
              {"\n"}
            </Text>

            <Text>
              5. Do daily exercise like walking, swimming and bicycling, etc.{" "}
              {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Varicose_Veins;

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
