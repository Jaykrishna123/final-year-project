import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Athletes_foot extends Component {
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
          {" "}
          Athletes Foot{" "}
        </Text>{" "}
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/L1_athletes-foot.jpg")} />{" "}
          </View>{" "}
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}> Intro </Text>{" "}
            <Text>
              {" "}
              Athlete 's foot, known medically as tinea pedis, is a common skin
              infection of the feet caused by fungus. Signs and symptoms often
              include itching, scaling, and redness.Athlete 's foot fungus may
              infect any part of the foot, but most often grows between the
              toes.{" "}
            </Text>{" "}
          </View>
          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}> Causes </Text>{" "}
            <Text>
              {" "}
              Athlete 's foot is caused by the same type of fungus that cause
              ringworm and jock itch. Damp socks and shoes and warm, humid
              conditions favor the organisms ' growth.{" "}
            </Text>
          </View>
          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}> Symptoms </Text>{" "}
            <Text> 1. Itching, Stinging, and Burning between the toes. </Text>{" "}
            <Text> 2. Itching, stining anf Burning on the soles of feet. </Text>{" "}
            <Text> 3. Blisters on the feet that itch. </Text>{" "}
            <Text>
              {" "}
              4. Cracking and Peeling skin on the feet, most commonly between
              the toes and on the soles.{" "}
            </Text>{" "}
            <Text> 5. dry Skin on the Soles or sides of feet. </Text>{" "}
            <Text> 6. Raw Skin on the feet. </Text>{" "}
          </View>
          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              {" "}
              Home Remidies{" "}
            </Text>
            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              {" "}
              1. Garlic:{" "}
            </Text>{" "}
            <Text>
              {" "}
              Take 2 tablespoons of juice extracted from basil leaves and drink
              on an empty stomach in the morning. {"\n"}{" "}
            </Text>
            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              {" "}
              2. Organic Tea Tree Oil:{" "}
            </Text>{" "}
            <Text>
              {" "}
              Add 40 Drops of Organic Tea Tree Oil to a foot bath and soak your
              feet for 10 minutes.After soaking and thoroughly drying the feet,
              massage a few drops of the oil directly into the affected area.{" "}
              {"\n"}{" "}
            </Text>
            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              {" "}
              3. Olive Leaf:{" "}
            </Text>{" "}
            <Text>
              {" "}
              Grind a few olive leaves into a paste.Using cotton balls, apply
              the paste directly on the affected area.Cover the area with
              tape.Leave it on for half an hour.Rinse the area with lukewarm
              water and then pat dry thoroughly.Follow this once or twice a day.{" "}
              {"\n"}{" "}
            </Text>
            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              {" "}
              4. Ozonated olive oil:{" "}
            </Text>{" "}
            <Text>
              {" "}
              Using ozonated olive oil can also help with Athlete’ s Foot.Use
              the paste to swab your clean, dry feet each morning and night.This
              should clear up the fungus within about two to four days and can
              be used as a preventative measure against future outbreaks. {
                "\n"
              }{" "}
            </Text>{" "}
          </View>{" "}
        </ScrollView>
      </View>
    );
  }
}
export default Athletes_foot;

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
