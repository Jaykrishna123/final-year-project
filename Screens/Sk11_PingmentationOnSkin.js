import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class PingmentationOnSkin extends Component {
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
          Pingmentation On Skin
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk11_PingmentationOnSkin.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Your skin color is determined by pigments called melanin that are
              produced by specialized cells (melanocytes) of the skin. There are
              more than 150 genes that affect skin color either directly or
              indirectly. So there is really nothing much you can do about the
              natural pigmentation of your skin.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Emotional distress</Text>
            <Text>2.Sunburn</Text>
            <Text>3.Loss of pingment in the skin</Text>
            <Text>4.Heredity </Text>
            <Text>5.Etreme weather conditions</Text>
            <Text>6.Picking at the skin</Text>
            <Text>7.Hormonal changes</Text>
            <Text>8.Metabolic disease</Text>
            <Text>9.Use of unsuitable skincare products</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Rapid pignment loss on several areas of the skin</Text>
            <Text>
              2.The intial appearance of the white patches can be followed by a
              stable period without any progression of the conditions
            </Text>
            <Text>
              3.Darker patches of skin appear on the forahead ,temples,cheeks or
              above the upper lip.
            </Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Raw Potato::
            </Text>
            <Text>
              Cut the potato in half and add a few drops of water on the exposed
              side. Rub it well on the affected areas of your skin and then wash
              off with lukewarm water after 10 minutes.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Lemon:</Text>
            <Text>
              Slice the lemon and squeeze out its juice. Collect the juice in a
              bowl. Add the honey to the juice and mix well. Apply the mixture
              to your skin, and leave it on for about 15 minutes. Wash off with
              normal water.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Apple Cider Vinegar:
            </Text>
            <Text>
              Mix equal amounts of apple cider vinegar and water. Use this
              solution to rinse the affected area. Leave it on for two to three
              minutes, and then rinse it off with lukewarm water.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default PingmentationOnSkin;

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
