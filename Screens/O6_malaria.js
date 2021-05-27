import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class malaria extends Component {
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
          Malaria{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/O6_malaria.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Malaria is a mosquito-borne infectious disease of humans and other
              animals caused by parasitic protozoans (a group of single-celled
              microorganisms) belonging to the Plasmodium type. Malaria causes
              symptoms that typically include fever, fatigue, vomiting, and
              headaches.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              Malaria is caused by the Plasmodium parasite.The parasite can be
              spread to humans through the bites of infected mosquitoes
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.High Fever</Text>
            <Text>2.Profuse Sweating</Text>
            <Text>3.Headache</Text>
            <Text>4.Nausea</Text>
            <Text>5.Coma</Text>
            <Text>6.Blood Stools</Text>
            <Text>7.Vomiting</Text>
            <Text>8.Diarrhea</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Lime and Lemon:
            </Text>
            <Text>
              The benefits of lemon tea for weight loss are well known. Lime and
              lemon also play a vital role to reduce the quartan type of
              malarial fever. Take 4 to 5 drops of lime, add the juice of one
              lemon and dissolve it in one glass of water. This mixture needs to
              be consumed before the onset of fever.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Ginger:</Text>
            <Text>
              Cut the ginger into small pieces and add 2-3 teaspoons of raisins.
              Boil this decoction in a glass of water until it gets reduced to
              half the amount. Consume the decoction after it cools down.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Warm water:
            </Text>
            <Text>
              Drink warm water frequently during the day to cleanse the bowels
              system and to keep the body hydrated, which helps in proper
              functioning of the body.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Cinnamon:
            </Text>
            <Text>
              Cinnamon is a valuable remedy for treating malaria. One teaspoon
              of powdered cinnamon should be boiled in a glass of water with a
              pinch of pepper powder and a teaspoon of honey. This needs to be
              taken every day which is a beneficial medicine for malaria.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default malaria;

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
    width: 500,
    height: 500,
    resizeMode: "center",
    alignItems: "center",
  },
  Text: {
    padding: 10,
    fontSize: 89,
  },
});
