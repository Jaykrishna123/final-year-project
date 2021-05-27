import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Hives extends Component {
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
          Hives
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk9_Hives.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Hives also known as urticaria, is a kind of skin rash with red,
              raised, itchy bumps.[1] They may also burn or sting. Often the
              patches of rash move around. Typically they last a few days and do
              not leave any long lasting skin changes.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Hereditary factors</Text>
            <Text>2.Allergies to medications</Text>
            <Text>3.Allergies to insect bites and stings</Text>
            <Text>4. Food Allergies </Text>
            <Text>5.Etreme weather conditions</Text>
            <Text>6.Excessive perspiration</Text>
            <Text>7.Irregular functioning of the thyroid</Text>
            <Text>8.Metabolic disease</Text>
            <Text>9.Autoimmune disease such as Lupus</Text>
            <Text>10.Liver or kidney diseases</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Red,raised ,spongy welts on the skin</Text>
            <Text>2.Welts can be also be painful and tender to touch</Text>
            <Text>3.Difficulty in breathing or swallowing</Text>
            <Text>4.Irregular or rapid pluse</Text>
            <Text>5.Increase in anxiety levels</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Baking Soda:
            </Text>
            <Text>
              Make a paste of baking soda and water and dilute it well. Now
              apply this paste on the welts. This should immediately subside the
              itching. You can alternatively also take a bath with baking soda.
              {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Aloe Vera:
            </Text>
            <Text>
              Make sure that you have a fresh aloe Vera leaf and cut it in half.
              Get the clean gel from the Aloe Vera leaf. Apply the gel directly
              on the skin and leave it on the skin for about half an hour. Wash
              off with cold water. Do this at least twice a day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Green Tea:
            </Text>
            <Text>
              Green tea has anti-histamine properties so make sure you have a
              cup of green tea every day. It will help to reduce the severity
              and frequency of the bouts.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Apple Cider Vinegar:
            </Text>
            <Text>
              Add two cups of apple cider vinegar to a bathtub filled with warm
              water. Soak in it for 15 to 20 minutes once daily.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5. Ginger:</Text>
            <Text>
              Drink ginger tea or chew on fresh ginger pieces a few times daily.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Cold Compress:
            </Text>
            <Text>
              Wrap some ice cubes in a cloth. Place it over the affected skin
              for 10 minutes at a time, three or four times a day.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Hives;

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
