import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class High_cholesterol extends Component {
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
          High cholesterol{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/O3_High_cholesterol.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Cholesterol is a waxy substance that's found in the fats (lipids)
              in your blood. While your body needs cholesterol to continue
              building healthy cells, having high cholesterol can increase your
              risk of heart disease.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Obesity</Text>
            <Text>2.Smoking</Text>
            <Text>3.Excessive Drinking</Text>
            <Text>4.Aging</Text>
            <Text>5.Diabetes</Text>
            <Text>6.High Blood Pressure</Text>
            <Text>7.Kidney or liver disease</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>
              High cholesterol does not xause Symptoms. It is usually found
              during a blood test that measures cholesterol levels. Some people
              with rare lipid disorders may have Symptoms such as bumps in the
              skin,hands or feet,which ae caused by deposits of extra
              cholesterol and other types of fat
            </Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Oatmeal:</Text>
            <Text>
              Oats are considered as traditional cholesterol buster. It is
              packed with soluble fiber and contains beta-glucans that helps
              reduce the absorption of cholesterol and lower down its level
              naturally. You can drop your LDL by 12-24%, if you eat 1½ cups of
              oatmeal regularly.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Onions:</Text>
            <Text>
              Mix one teaspoon each of onion juice and honey. Drink it once
              daily.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Honey:</Text>
            <Text>
              Add 1 teaspoon honey to 1 cup hot water in the morning, and you
              may rid your system of excess fat and cholesterol, according to
              Ayurvedic medicine. Add 1 teaspoon lime juice or 10 drops cider
              vinegar to give that drink a more powerful cholesterol-fighting
              punch.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Apple Cider Vinegar:
            </Text>
            <Text>
              Mix one teaspoon of organic apple cider vinegar in a glass of
              water. Drink this two or three times a day at least for a month.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Orange Juice:
            </Text>
            <Text>
              Drinking 3 cups of fresh orange juice regularly can help you
              reduce blood cholesterol levels.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Fish Oil:
            </Text>
            <Text>Consume around 1-4 gram of fish oil daily.{"\n"}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default High_cholesterol;

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
