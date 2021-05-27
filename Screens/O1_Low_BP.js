import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Low_BP extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#54a0ff"
          translucent={true}
        />
        <Text style={{ padding: 1, fontSize: 20, textAlign: "center" }}>
          Low Blood Pressure
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/O1_Low_BP.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Acid reflux is one of the top health-related internet search
              quries,a very common symptim of burning pain felt internally
              around the lower chest area,acused by stomacth acid flowing
              backcup into felt food pipe.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Medications</Text>
            <Text>2.Pregnancy</Text>
            <Text>3.Heart problem</Text>
            <Text>4.Nutritional Deficiencies</Text>
            <Text>5.Blood loss</Text>
            <Text>6.Endocrine Problems</Text>
            <Text>7.Servere infection</Text>
            <Text>8.Allergic reaction</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Giddiness </Text>
            <Text>2.Blurred vision</Text>
            <Text>3.Palpitations</Text>
            <Text>4.Fatigue</Text>
            <Text>5.Incresed thirst</Text>
            <Text>6.Pale skin</Text>
            <Text>7.Fainting</Text>
            <Text>8.Shortness of breath</Text>
            <Text>9.Irregular heartbeat</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Salt Water
            </Text>
            <Text>
              {" "}
              Simply mix one-half teaspoon of salt in a glass of water and drink
              it. You can also drink sports beverages. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Coffee:</Text>
            <Text>
              Drink a cup of coffee in the morning or have it along with meals,
              especially when dealing with orthostatic hypotension. But, do not
              make it a habit because the long-term effects of caffeine are not
              clear.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Raisins:</Text>
            <Text>
              Regular intake of raisins is one of the most effective natural
              remedies for low BP. Soak some raisins overnight and eat them the
              next morning on an empty stomach. Drink the raisins soaked water
              after you eat them. Follow this for about a month to get relief.{" "}
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Holy Basil:
            </Text>
            <Text>
              Extract the juice of 10 to 15 basil leaves. Add one teaspoon of
              honey to it. Drink this juice daily on an empty stomach. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5.Licorice Root:
            </Text>
            <Text>
              Take about 400-500 mg of licorice root capsules for a few days.{" "}
              {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Low_BP;

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
