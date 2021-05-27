import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class H4_eye_pain extends Component {
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
          Eye pain{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H4_eye_pain.jpg")} />
          </View>

          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Eye pain is described as an aching, throbbing, burning or stabbing
              sensation inside or around the eye. Eye pain may occur on the
              surface of eye or even within the deeper structures of the eye.
              Eye pain which is on the surface of the eye can be itching,
              burning or even shooting pain. This surface eye pain is generally
              related to external objects in the eye, eye infection or may be
              anything else which irritates the membrane that covers the eye
              surface.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Lyme disease</Text>
            <Text>2.Allergies</Text>
            <Text>3.Tuberculosis </Text>
            <Text>4.Acanthamoea</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Tears coming out of eyes</Text>
            <Text>2.Red itchy eyes also known as conjuctivitis</Text>
            <Text>3.Sensation of foreign body</Text>
            <Text>4.Sensitivity or irritation from light</Text>
            <Text>5.Decrease in vision capacity</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Carrot Juice:
            </Text>
            <Text>
              Take 3 – 4 fresh carrots. Wash, peel and dice them. Run the diced
              carrots through a mixer-grinder to make juice. Drink at least two
              glasses of carrot juice daily for 2 to 3 weeks.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Rinse With Rose Water:
            </Text>
            <Text>
              Take 3 – 4 drops of pure rose water. Put them directly in the eyes
              using a eye dropper. Allow to sit for a few minutes.
              Alternatively, mix the rose water in some distilled water. Use
              this water to rinse the eyes two to three times. Continue either
              of the processes twice daily for 2 to 3 days.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Cucumber Slice:
            </Text>
            <Text>
              Take a fresh cucumber, wash and slice it. Take a bowl of ice cold
              water. Put the cucumber slices in cold water. Let it sit for 10
              minutes. Place the cold cucumber slice, one on each eyelid. Leave
              it for 10 minutes, repeat the process as required.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Sesame Flowers:
            </Text>
            <Text>
              Take 4-5 sesame flowers. Wash and grind to a paste. Boil a glass
              of cow’s milk. Add the sesame flower paste. Drink the mixture once
              daily for a week. Sesame flower paste may be applied on the
              eyelids.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Creeping Wood Sorrel Leaves:
            </Text>
            <Text>
              Take a bunch of fresh Creeping Wood Sorrel leaves. Soak the leaves
              in some clean water. Strain the water and rinse your eyes. Repeat
              the process two to three times daily for a week.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Bael Leaves:
            </Text>
            <Text>
              Pluck some fresh Bael Leaves. Wash with clean water and dry. Heat
              the leaves and apply on the eyes when warm. Repeat the process two
              to three times daily.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default H4_eye_pain;

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
    width: 500,
    height: 500,
    resizeMode: "center",
    alignItems: "center",
  },
  Text: {
    padding: 10,
    fontSize: 89,
  },
});
