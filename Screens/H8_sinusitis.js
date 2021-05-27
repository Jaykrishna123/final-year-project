import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class H8_sinusitis extends Component {
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
          Sinusitis{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H8_sinusitis.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Sinusitis, also known as a sinus infection or rhinosinusitis, is
              inflammation of the sinuses resulting in symptoms. Common signs
              and symptoms include thick nasal mucus, a plugged nose, and pain
              in the face.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              1.The Mucous membrane swells when it becomes inflamed,blocking the
              drainage of fluid fom the sinuses into the nose and throat.
            </Text>
            <Text>
              2.Mucus and fluid build up inside the sinuses causing pressure and
              pain
            </Text>
            <Text>
              3.Bacteria are more likelt to grow in sinuses that are unable to
              drian properly. Bacterial infection the sinuses aften causes ore
              inflammation and pain.
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Sinus Headache</Text>
            <Text>2.Soe throat</Text>
            <Text>3.Cough</Text>
            <Text>4.Occasionally Facial swelling </Text>
            <Text>5.Facial tenderness</Text>
            <Text>6.Fever </Text>
            <Text>7.Felling of nasal stuffiness</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Rest:</Text>
            <Text>
              This will help your body fight inflammation and speed recovery.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Apply warm compresses to your face:
            </Text>
            <Text>
              Place warm, damp towels around your nose, cheeks and eyes to ease
              facial pain.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Sleep with your head elevated::
            </Text>
            <Text>
              This will help your sinuses drain, reducing congestion.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Drink fluids:
            </Text>
            <Text>Dring fluids such as water or juice.{"\n"}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default H8_sinusitis;

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
