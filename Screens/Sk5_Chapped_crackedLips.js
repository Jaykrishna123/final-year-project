import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Chapped_crackedLips extends Component {
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
          Chapped crackedLips
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk5_Chapped_crackedLips.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Chapped or dry lips are a common problem that can be painful and
              unattractive. Main causes of Chapped or Cracked Lips are vitamin
              deficiency, allergic reaction, dehydration, smoking, excessive
              licking of lips, sun exposure and harsh weather.
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Licking lips again and again</Text>
            <Text>2.Dehydration</Text>
            <Text>3.Improper care of lips</Text>
            <Text>4.Breathing through mouth</Text>
            <Text>5.Sodium Lauryl Sulfare</Text>
            <Text>6.Excess consumption of vitimin A</Text>
            <Text>7.Acid present in citrus fruits</Text>
            <Text>8.Dry clod or heat</Text>
            <Text>9.Cosmetic products</Text>
            <Text>10.Exposure to sun</Text>
            <Text>11.Excessive smoking</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Dryness</Text>
            <Text>2.Redness</Text>
            <Text>3.Cracks</Text>
            <Text>4.Bleeding</Text>
            <Text>5.Flaking</Text>
            <Text>6.Tender or sore lips</Text>
            <Text>7.Swelling</Text>
            <Text>8.Scales</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1.Honey:</Text>
            <Text>
              {" "}
              Simply apply pure honey on lips, several times a day. Honey can
              also be mixed with glycerine and applied on the lips.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Cocount Oil:
            </Text>
            <Text>
              {" "}
              Apply pure coconut oil, several times a day, on your lips to keep
              them moist. You can also use olive oil or mustard oil.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Sugar:</Text>
            <Text>
              Mix some sugar with one teaspoon of honey and apply the paste on
              your lips. Let it rest for a few seconds and then, wash it with
              lukewarm water.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Rose Petals:
            </Text>
            <Text>
              Wash a handful of rose petals thoroughly in water. Soak the petals
              in milk for a few hours. Mash the rose petals into a thick paste.
              Apply the paste on your dry lips two to three times a day and
              every night before going to bed.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Milk Cream:
            </Text>
            <Text>
              Apply fresh milk cream on your lips and leave it on for 10
              minutes. Then gently wash your lips with a cotton ball dipped in
              lukewarm water.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. cucumber:
            </Text>
            <Text>
              Either cucumber juice or a slice of cucumber can be applied over
              lips to make them gentle and soft. This is the best cure for dry
              lips.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Chapped_crackedLips;

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
