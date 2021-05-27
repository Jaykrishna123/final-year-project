import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Gout extends Component {
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
          Gout
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/L2_gout.jpeg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Gout is usually characterized by recurrent attacks of inflammatory
              arthritis—a red, tender, hot, and swollen joint. Pain typically
              comes on rapidly in less than twelve hours. The joint at the base
              of the big toe is affected in about half of cases. It may also
              result in tophi, kidney stones, or urate nephropathy.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.consuming acohol in large amount</Text>
            <Text>2.Soft Drinks with high fructose</Text>
            <Text>3.High blood Pressure</Text>
            <Text>4.Bone marrow disorder</Text>
            <Text>5.Dairy Products</Text>
            <Text>6.Kidney Diseses</Text>
            <Text>7.Vascular diseses</Text>
            <Text>Meat and sea food</Text>
            <Text>Physical trauma</Text>
            <Text>Surgery</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Aching joints</Text>
            <Text>2.Red or purple skin</Text>
            <Text>3.inflammation</Text>
            <Text>4.Fever</Text>
            <Text>5.Nodules in the ears,hands,or elbows</Text>
            <Text>6.Swelling</Text>
            <Text>7.Itching </Text>
            <Text>8.inflammation in joint</Text>
            <Text>9.Stiffness</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Apple Cider vinegar:
            </Text>
            <Text>
              {" "}
              Mix one teaspoon of raw, unfiltered apple cider vinegar in a glass
              of water. Drink it two to three times daily.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Ginger Root:
            </Text>
            <Text>
              Take a raw piece of ginger root and cook it with other vegetables.
              You can also add ginger root in your tea and drink it, many times
              a day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Apple:</Text>
            <Text>
              Apple is a proven herbal remedy for gout.Eat a fresh apple, once a
              day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Baking Soda:
            </Text>
            <Text>
              Take 1 tablespoon of baking soda and mix it in a glass of water.
              Drink this, 4 times a day. Note- Avoid this home remedy if you
              have a problem of high blood pressure. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Lemon juice:
            </Text>
            <Text>
              Add the juice of half a lemon to a glass of water and drink it
              three times a day. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6.PineApple:
            </Text>
            <Text>
              Eat pineapple and other fruits. Drink a glass of fresh pineapple
              juice. This will help to ease the pain. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>7. Water:</Text>
            <Text>
              Drink water as much as you can. You cannot have any disease until
              you keep your body hydrated. {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Gout;

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
