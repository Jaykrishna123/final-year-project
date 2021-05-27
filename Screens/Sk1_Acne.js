import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Acne extends Component {
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
          Acne
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk1_Acne.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Acne is an infection of the skin, caused by changes in the
              sebaceous glands. The most common form of acne is called acne
              vulgaris, which means "common acne". The redness comes from the
              inflammation of the skin in response to the infection.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Hormonal Fluctuation</Text>
            <Text>2.Hyperactive sebaceous glands</Text>
            <Text>3.Stress</Text>
            <Text>4.Many dead skin cells staying on the skin </Text>
            <Text>5.Bacteria in the pores</Text>
            <Text>6.Skin irritation or scratching of any sort</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.crusting of skin bumbs</Text>
            <Text>2.Cysts</Text>
            <Text>3.Papules</Text>
            <Text>4.Pustules</Text>
            <Text>5.Redness around the skin eruption</Text>
            <Text>6.Scarring of the skin</Text>
            <Text>7.Whiteheads</Text>
            <Text>8.blackheads</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Baking Soda:
            </Text>
            <Text>
              {" "}
              Apply a paste of one or two teaspoons of baking soda and a little
              water. Rinse it off after a few minutes.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Green Teas:
            </Text>
            <Text>
              Use a cooled cup of green tea as a face wash or lay the bag over
              the affected area.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Honey:</Text>
            <Text>
              Apply a teaspoon of honey to affected areas, or make a mask by
              mixing 1/2 cup of honey with 1 cup of plain oatmeal and leaving it
              on for 30 minutes.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Mint:</Text>
            <Text>
              Mix 2 tablespoons of finely chopped fresh mint with two
              tablespoons each of plain yogurt and oatmeal (use a blender to
              pulverize the oatmeal to powder). Leave the concoction on your
              face for 10 minutes, then rinse off with water.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Toothpaste:
            </Text>
            <Text>
              Apply a small amount of white toothpaste on the affected area
              before going to bed. The toothpaste will reduce the swelling and
              dry out the acne. Within a day or two, you should see significant
              improvement.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Lemon Juice:
            </Text>
            <Text>
              Rub a slice of lemon on the affected area and leave it for a few
              hours before rinsing your face with water.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              7. Apple Cinder Vineger:
            </Text>
            <Text>
              mix equal parts apple cider vinegar and water and apply to skin
              with a cotton ball, making sure to shake well before each use
              {"\n"}.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Acne;

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
