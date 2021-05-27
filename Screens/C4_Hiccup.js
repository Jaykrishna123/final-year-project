import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Hiccup extends Component {
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
          Hiccup
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/C4_Hiccup.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              A hiccup is a sudden, involuntary contraction (spasm) of the
              diaphragm muscle. When the muscle spasms , the vocal cords snap
              shut, producing the hiccup sound.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Coughing</Text>
            <Text>2.Swallowing air excessively</Text>
            <Text>3.Opiate drug use</Text>
            <Text>4.Laughing </Text>
            <Text>
              5.Intense emotion such as fear,excitement joy, or euphoria.
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>
              The characterstic sound of a hiccup is the only sign. Sometimes
              the only symtoms is a sight tightening sensation in your
              chest,abdomen or thorat that precedes the sound.
            </Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text>1. Hold your breath{"\n"} </Text>

            <Text>2. Drink a glass of water quickly{"\n"} </Text>

            <Text>3. Pull on the tongue{"\n"} </Text>

            <Text>4. Gargle water{"\n"} </Text>

            <Text>
              5. Put a teaspoon of sugar on the tongue and let it slowly
              dissolve. For a young child, use corn syrup{"\n"}{" "}
            </Text>

            <Text>6. Use smelling salts{"\n"} </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Hiccup;

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
