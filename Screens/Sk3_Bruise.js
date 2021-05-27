import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Bruise extends Component {
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
          Bruise
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk3_Bruise.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              A bruise is an area of skin discoloration. A bruise occurs when
              small blood vessels break and leak their contents into the soft
              tissue beneath the skin.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Falls</Text>
            <Text>2.Sport injuries</Text>
            <Text>3.Car accidents</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Pain</Text>
            <Text>2.Swelling</Text>
            <Text>3.Skin discoloration</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Ice Pack:
            </Text>
            <Text>
              {" "}
              Apply ice pack on the bruised area. This will numb the whole area
              and you won’t feel pain for several minutes.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Vitamin K:
            </Text>
            <Text>
              Eat more foods rich in vitamin K, such as alfalfa, spinach,
              broccoli, lettuce, kale, and other green leafy vegetables.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Parsley:</Text>
            <Text>
              Take fresh parsley and crush it. Apply it on the bruised area.
              This will make the bruise go away faster.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Bromelain:
            </Text>
            <Text>
              Take a bromelain supplement (250 to 400 mg, three times a day)
              until the bruise clears.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Cayenne Pepper and Vaseline:
            </Text>
            <Text>
              Take 1 part of cayenne pepper and 5 parts of melted Vaseline. Mix
              it well and apply it on the bruise (Vaseline mixture should be
              cold).{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Other remedies:
            </Text>
            <Text>
              Egg rolling, pineapple, herbal tea compress, arnica, garlic,
              vanilla.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Bruise;

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
