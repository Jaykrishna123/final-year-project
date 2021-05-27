import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Dysmenorheas extends Component {
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
          Dysmenorheas
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/S5_Dysmenorheas.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Dysmenorrhea, also known as dysmenorrhoea, painful periods, or
              menstrual cramps, is pain during menstruation. It usually begins
              around the time that menstruation begins. Symptoms typically last
              less than three days. The pain is usually in the pelvis or lower
              abdomen.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Endometriosis</Text>
            <Text>2.Uterinr fibroids</Text>
            <Text>3.Adenomoyosis</Text>
            <Text>4.Pelvic inflammation disease (PID) </Text>
            <Text>5.Cervical stenosis</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>
              1.Throbbing or cramping pain your lower abdomen that may be
              intense
            </Text>
            <Text>2.Dull,constant ache</Text>
            <Text>3.Pain that radiates to your lower back and thighs</Text>
            <Text>4.Nausea</Text>
            <Text>5.Loose stools</Text>
            <Text>6.Headache</Text>
            <Text>7.Dizzininess</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Apply Heat:
            </Text>
            <Text>
              {" "}
              Heat helps to relax the contracting muscles in your uterus, which
              is the cause for your pain. There are many over-the-counter
              heating patches and pads, such as ThermaCare, Bengay, or electric,
              reusable ones. Or, even taking a regular plastic bottle with hot
              water and applying it to your abdomen is an alternative when you
              don't have access to a heating pad.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Mint:</Text>
            <Text>
              Wintergreen and peppermint are commonly used to heal menstruation
              cramps. Add any of them into your tea and drink a cup or two
              daily. Besides, you may try mint candies.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Aloe Vera Juice:
            </Text>
            <Text>
              Drink aloe vera juice along with honey to reduce the pain and ease
              the flow.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Ginger:</Text>
            <Text>
              You can add ginger in your food while cooking or suck on some
              ginger candies.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5. Basil:</Text>
            <Text>
              Add one tablespoon of basil leaves to one cup of boiling water.
              Cover tightly and allow it to cool. Drink this every few hours to
              ease cramps.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Blackstrap Molasses:
            </Text>
            <Text>
              Add one to two teaspoons of blackstrap molasses to a cup of warm
              milk. Drink it as soon as you start having cramps and continue as
              long as needed.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Dysmenorheas;

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
