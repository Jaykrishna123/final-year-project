import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Belly_fat extends Component {
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
          Angina
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/C1_Angina.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Angina or Chest Pain is a pain that comes from the heart. Each
              year about 20,000 people in the UK develop angina for the first
              time. It is more common in people over the age of 50 years. It is
              also more common in men than in women. Sometimes it occurs in
              younger people.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              Angina or chest pain caused by reduced blood flow to the heart is
              known as agnina pectoris or simply angina.
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Chest pain or discomfort</Text>
            <Text>
              2.Pain in yours arms,neck,jaw,shoulder or back accompanying chest
              pain.
            </Text>
            <Text>3.Nausea</Text>
            <Text>4.Fatigue</Text>
            <Text>5.Shortness of breath</Text>
            <Text>6.Sweating</Text>
            <Text>7.Dizziness</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1.Garlic:</Text>
            <Text>
              Add ½ teaspoon of garlic juice to a cup of hot water and drink it.{" "}
              {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Ginger:</Text>
            <Text>
              Add 1 tablespoon of grated ginger to a cup of hot water. Cover and
              steep for 5 minutes, then strain it and drink it.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Lemon</Text>
            <Text>
              Try to include one lemon in your food each day. You can squeeze it
              over salads or have it as fresh lemon water.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Basil Leave
            </Text>
            <Text>
              Chew a few leaves of fresh basil leaves in the morning. If you do
              not get fresh leaves, then make a juice of basil, adding a few
              spoons or concentrated basil juice and warm water. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5.Grapes:</Text>
            <Text>
              These are known to strengthen the heart. They help to reduce the
              risk of heart attack, angina pain and increase the quality of your
              breath.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6.Alfalfa Tea :{" "}
            </Text>
            <Text>
              Drink warm alfalfa tea when you have chest pain. Add 1 teaspoon of
              dried alfalfa leaves to a cup of hot water. Steep for 5 minutes,
              then strain it.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Belly_fat;

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
    padding: 10,
    backgroundColor: "#f5fffa",
  },
  Image: {
    justifyContent: "center",
    width: 200,
    height: 200,
    resizeMode: "center",
    alignItems: "center",
  },
  Text: {
    padding: 10,
    fontSize: 89,
  },
});
