import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Knee_Pain extends Component {
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
          Knee Pain
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/L3_Knee-Pain.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Knee pain is a common problem with many causes, from acute
              injuries to complications of medical conditions. Knee pain can be
              localized to a specific area of the knee or be diffuse throughout
              the knee.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Weakened bone Structure</Text>
            <Text>2.Ligament injuries</Text>
            <Text>3.Fractures</Text>
            <Text>4.Meniscus </Text>
            <Text>5.Knee Bursitis</Text>
            <Text>6.Excess Weight</Text>
            <Text>7. Lack of muscle flexibility or strength</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Swelling and Stiffness</Text>
            <Text>2.Redness and warmth to the touch</Text>
            <Text>3.Weakness or instability</Text>
            <Text>4.Inability to fully straighten the knee</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Cold Compress:
            </Text>
            <Text>
              {" "}
              Wrap a handful of ice cubes in a thin towel. Apply the compress to
              the affected knee area for 10 to 20 minutes. Do this two or three
              times daily until your pain is gone.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Ginger:</Text>
            <Text>
              Massage the affected knee with ginger oil two or three times a day
              until you are satisfied with the results.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Lemon:</Text>
            <Text>
              Cut one or two lemons into small pieces. Tie the pieces in a
              cotton cloth and dip it in warm sesame oil. Place the cloth on the
              affected knee for five to 10 minutes. Do this twice daily until
              the pain is gone completely.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Exercise:
            </Text>
            <Text>
              Exercise is also good for strengthening the body's support for its
              joints. For the knee, strengthening the leg muscles is
              particularly helpful.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Knee_Pain;

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
