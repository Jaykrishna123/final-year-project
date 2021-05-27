import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class High_BP extends Component {
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
          High Blood Pressure
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/O2_High_BP.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Acid reflux is one of the top health-related internet search
              quries,a very common symptim of burning pain felt internally
              around the lower chest area,acused by stomacth acid flowing
              backcup into felt food pipe.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Obstructive sleep </Text>
            <Text>2.Kideny problem</Text>
            <Text>
              3.Certain defects in blood vessels you're born with congenital
            </Text>
            <Text>4.lllegal drugs, such as cocaine and amphetamines</Text>
            <Text>5.Adrenal gland turmors</Text>
            <Text>6.Throid problem</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>
              High blood pressure usually has no signs or symptoms ,so the only
              way to know if you have high blood pressure is to have yours
              measured. However, a single high reading does not necessarily mean
              you have high blood pressure. Many times can affect your blood
              pressure through the day, so your doctor will take a number of
              blood pressure reading to see that it stays high over time.{"\n"}
              Occasionally people with very high blood pressure say they
              experience headaches,but it is best to isit your GP if you are
              concerned about symptoms{"\n"}
            </Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Watermelon Seeds:
            </Text>
            <Text>
              Add two teaspoons of gently crushed, dried watermelon seeds to one
              cup of boiled water. Steep it for about an hour, then strain it.
              Take four tablespoons of this water at regular intervals
              throughout the day. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Garlic:</Text>
            <Text>
              Mix five or six drops of garlic juice in four teaspoons of water
              and take it twice a day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. coconut Water:
            </Text>
            <Text>
              Drink eight to 10 glasses of coconut water daily. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Banana:</Text>
            <Text>Eat one or two bananas daily. {"\n"}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default High_BP;

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
