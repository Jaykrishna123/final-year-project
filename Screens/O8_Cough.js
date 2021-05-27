import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Cough extends Component {
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
          Cough
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/O8_Cough.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Cough is the irritation and infection the respirantory throat. Its
              common disease in change of seasons.Cough is known as simpls
              disease but it can be result to chronic disease if not cured in
              Time.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Seasonal Change </Text>
            <Text>2.Common cold</Text>
            <Text>3.Fever </Text>
            <Text>4.Smoking and Drinking alcohol</Text>
            <Text>5.Bacterial infection</Text>
            <Text>6.Sinus infection</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Chest pain </Text>
            <Text>2.Running Noise</Text>
            <Text>3.Itchiness in respiratory tract</Text>
            <Text>4.Pain during respirantion</Text>
            <Text>5.Fracture in ribs</Text>
            <Text>6.Sweating</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Ginger</Text>
            <Text>
              {" "}
              Peel the small piece of ginger and cut it into small slices. Boil
              the sliced ginger in water for two minutes, put little amount of
              honey and lemon juice in it. Then, serve it warm. Repeat this
              process three to four times a day until the cough is cured for
              several days. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Lemon:</Text>
            <Text>
              Lemon has an extra power of fighting with bacteria because of
              vitamin C in it. Mix two tablespoons of lemon juice with one
              tablespoon of honey. Add this mixture to one glass of boiled warm
              water and serve it three-four times a day until you feel well.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Turmeric:
            </Text>
            <Text>
              Put a tablespoon of turmeric powder in half-cup of boiling water.
              Add little amount of black pepper and cinnamon to it and boil for
              3-4 minutes. Finally, add a tablespoon of honey and serve it two
              times daily until you feel relieved. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4.Hot milk with honey:
            </Text>
            <Text>
              Boil a glass of milk in a bowl and add a tablespoon of honey to
              it. Serve it 2 times a day until you feel fine. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5.Garlic:</Text>
            <Text>
              Mix 2-3 cloves of garlic with few drops of clove oil and a
              tablespoon of honey. Serve this daily to clear out your throat
              during cough.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4.Other home remedies:
            </Text>
            <Text>
              Other home remedies for cough can be cough syrup of onion, cayenne
              pepper syrup, carrot juice with honey, etc. {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Cough;

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
