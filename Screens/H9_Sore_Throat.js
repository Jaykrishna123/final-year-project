import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class H9_Sore_Throat extends Component {
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
          Sore Throat{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H9-Sore-Throat.jpeg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              A sore throat (or throat pain) is pain or irritation of the
              throat. A common physical symptom, it is usually caused by acute
              pharyngitis (inflammation of the throat), although it can also
              appear as a result of trauma, diphtheria, or other conditions.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.common cold</Text>
            <Text>2.Flu</Text>
            <Text>3.Mononuleosis</Text>
            <Text>4.Measles</Text>
            <Text>5.Chikenpox</Text>
            <Text>6.Allergies</Text>
            <Text>7.Dryness</Text>
            <Text>8.Irritants</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Pain or Scatchy Sensation in the throat</Text>
            <Text>2.Pain that worsens with swallowing or talking</Text>
            <Text>3.Difficulty swallowing</Text>
            <Text>4.Sore,swollen glands in your nect or jaw</Text>
            <Text>5.Swollwn ,red tonsils</Text>
            <Text>6.White patches or pus on your tonsils </Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Lemon and water:
            </Text>
            <Text>
              Mix 1 teaspoon lemon juice in 1 cup water for this home remedy for
              sore throats; the astringent juice will help shrink swollen throat
              tissue and create a hostile (acidic) environment for viruses and
              bacteria.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Salt and water:
            </Text>
            <Text>
              Try grandma's sore throat remedy by mixing 1⁄4 teaspoon salt in 1
              cup warm water. (Use the hottest water you can comfortably
              tolerate. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Other home treatment:
            </Text>
            <Text>
              - Hot sauce and water - Sage and water - Sage and water - Clove
              tea - Tomato juice - Green tea - Ginger, honey, and lemon in water
              {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default H9_Sore_Throat;

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
