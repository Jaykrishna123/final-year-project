import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Migraine_headache extends Component {
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
          Migraine headache{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H7_Migraine_headache.png")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Migraines are a type of recurring severe headache that can be
              preceded or accompanied by sensory warning signs such as flashes
              of light, blind spots, tingling in the arms and legs, nausea,
              vomiting, and increased sensitivity to light and sound.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Smoking or exposure to smoke</Text>
            <Text>2.Hormonal Changes</Text>
            <Text>3.Stress ,tension,anxiety,depression,excitement</Text>
            <Text>4. Smoking and drinking Alcohol</Text>
            <Text>5.Dehydration</Text>
            <Text>6.Changes in sleep patterns</Text>
            <Text>7.Tension headache</Text>
            <Text>8.Some Medications</Text>
            <Text>9.Allergies</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Aura</Text>
            <Text>2.Depression,irritability or excitement</Text>
            <Text>3.Lack of restful sleep</Text>
            <Text>4.Hyperctivity </Text>
            <Text>5.Constipation </Text>
            <Text>6.Neck Stiffness</Text>
            <Text>7.Blurred vision</Text>
            <Text>8.Cravings</Text>
            <Text>9.Eye and neck pain</Text>
            <Text>10.Frequent urination</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1.AGinger:</Text>
            <Text>
              Drink ginger tea a few times throughout the day until you get
              relief. Drink it at the onset of your headache. Or you may simply
              chew a piece of raw ginger root.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Ice Pack :
            </Text>
            <Text>
              Applying an ice pack to the back of your neck to feel relieved
              from headache.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Apple cider vineger:
            </Text>
            <Text>
              Add one tablespoon of organic apple cider vinegar and a tablespoon
              of honey to a glass of water. Drink this solution daily.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Cayenne Pepper:
            </Text>
            <Text>
              Insert one-half to one teaspoon of cayenne pepper in a cup of warm
              water then add some lemon juice and honey. Drink this solution
              daily as required for you.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5.Chamomile</Text>
            <Text>
              Steep 2-3 teaspoons of dried chamomile flowers in a cup of hot
              water for a few minutes. Add a little amount of lemon juice and
              honey. Strain and drink this tea 3-4 times a day.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Migraine_headache;

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
