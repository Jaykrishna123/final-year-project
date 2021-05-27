import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Belly_fat extends Component {
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
          Asthma
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/C2_Asthma.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Asthma is a common long term inflammatory disease of the airways
              of the lungs. It is characterized by variable and recurring
              symptoms, reversible airflow obstruction, and bronchospasm.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Allergies</Text>
            <Text>2.Smoke and tobacco</Text>
            <Text>3.Environmental factors,like air pollution</Text>
            <Text>4.Obesity</Text>
            <Text>5.Stress,tension and depression</Text>
            <Text>6.Genetics</Text>
            <Text>7.Lung infection during childhood</Text>
            <Text>8.Premature birth</Text>
            <Text>9.Certain foods,like fish ,soy,eggs,peanuts etc</Text>
            <Text>10.Exercise</Text>
            <Text>11.Heartburn</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Shortness of breath.</Text>
            <Text>2.Chest tightness or pain.</Text>
            <Text>3.Chronic coughing</Text>
            <Text>4.Trouble sleeping due to coughing or Wheezing</Text>
            <Text>5.Shortness of breath</Text>
            <Text>6.Sweating</Text>
            <Text>7.Dizziness</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1.Mustard Oil:
            </Text>
            <Text>
              Take some mustard oil and mix camphor in it. Massage with it all
              over the chest, till you get relief from the asthma. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Ginger:</Text>
            <Text>
              Make a juice with equal quantities of ginger, pomegranate, and
              honey. Consume it 2-3 times a day for effective results.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Eucalyptus Oil:
            </Text>
            <Text>
              Put a few drops of eucalyptus essential oil in a cup of boiling
              water and take its steam as it will help in opening up the nasal
              passages and air passages so that air can pass through easily.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Honey:</Text>
            <Text>
              You can consume a teaspoon of honey mixed in hot water at least
              2-3 times a day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5.Other Remedies:
            </Text>
            <Text>
              Onions, fruits and lemons, fishes, soup, warm milk, fennel seeds.
              {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Belly_fat;

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

    resizeMode: "center",
    alignItems: "center",
  },
  Text: {
    padding: 10,
    fontSize: 89,
  },
});
