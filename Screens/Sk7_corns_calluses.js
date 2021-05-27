import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class corns_calluses extends Component {
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
          Corns calluses
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk7_corns_calluses.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              A callus (tyloma) is an area of skin that thickens after exposure
              to repetitive frictional forces in order to protect the skin. A
              corn is a smaller type of callus that commonly develops on top of,
              and between, toes. Corns are separated into soft and hard corns.
              Both calluses and corns may or may not be painful. When it becomes
              painful, treatment is required.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.wearing ill-fitting shoes</Text>
            <Text>2.Skipping socks</Text>
            <Text>3.Playing instruments or using hand tools</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>A thick ,rough area of skin</Text>
            <Text>A Hardned ,raised bumps</Text>
            <Text>Tenderness or pain under your skin</Text>
            <Text>Flaky,dry or waxy skin</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Pumice Stone:
            </Text>
            <Text>
              Since corns and calluses are composed of dead skin, rubbing the
              area with a pumice stone is effective in alleviating the symptoms.
              Remember to soak your foot in warm water first and then rub with a
              pumice stone.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Vineger:</Text>
            <Text>
              Before bed, soak a cotton ball with vinegar and attach it to the
              affected area, leaving it on overnight. The following day, use a
              pumice stone to rub the corn away.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Baking soda:
            </Text>
            <Text>
              Add two to three tablespoons of baking soda to a basin of warm
              water. Soak your feet in this solution for 10 to 15 minutes. Rub
              the affected area with a pumice stone to remove the dead skin.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              {" "}
              4. Moisturize:
            </Text>
            <Text>
              Apply moisturizer to the affected areas in order to keep the skin
              soft.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5. Lemon:</Text>
            <Text>
              Cut open a fresh Aloe Vera leaf and apply the gel directly to
              chickenpox. Let it absorb and dry completely. Apply regularly to
              cure chickenpox.Apply fresh lemon juice on the corn and allow it
              to air dry. Do this at least three times daily.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>6. Garlic:</Text>
            <Text>
              Rub half of a garlic clove on the corn. Let the skin dry, cover it
              with a bandage and leave it on overnight. The next morning, remove
              the bandage and wash your feet with warm water. Do this every
              night until the corn disappears.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default corns_calluses;

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
