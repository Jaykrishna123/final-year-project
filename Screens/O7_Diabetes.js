import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Diabetes extends Component {
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
          Diabetes
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/O7_Diabete.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Diabetes is a metabolic diseases that affects your body’s ability
              to produce or use a hormone called insulin because of high blood
              sugar level in the body. Diabetes is a disorder of the way the
              body uses digested food for energy i.e. metabolism.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>
              1.type 1 Diabetes is Caused by a lack of insulin due to the
              destruction of insulin-producting beta cells in the pancreas.
            </Text>
            <Text>
              2.Type 2 Diabetes is aused by the resustance to product enogh
              insulin for proper function.
            </Text>
            <Text>3.Obesity</Text>
            <Text>4.Lack of exercise</Text>
            <Text>5.Autoimune destruction of Beta cells</Text>
            <Text>6.General Susceptibility</Text>
            <Text>7.Enviromental Factors</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Excessive Thrist</Text>
            <Text>2.Elvated blood sugar level</Text>
            <Text>3.Weight loss</Text>
            <Text>4.Frequent urination</Text>
            <Text>5.Slow-Healing Wounds</Text>
            <Text>6.Blurry Vision</Text>
            <Text>7.Extreme Hunger</Text>
            <Text>8.Nausea and vomiting</Text>
            <Text>9.Slow-Healing Wounds</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Basil leaves:
            </Text>
            <Text>
              {" "}
              Take 2 tablespoons of juice extracted from basil leaves and drink
              on an empty stomach in the morning. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Bitter Gourd:
            </Text>
            <Text>
              Drink some bitter gourd juice on an empty stomach each morning.
              First remove the seeds of two to three bitter gourds and use a
              juicer to extract the juice. Add some water and then drink it.
              Follow this treatment daily in the morning for at least two
              months.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Mango leaves:
            </Text>
            <Text>
              Boil 15 fresh Mango leaves in 1 glass of water. Leave overnight.
              Filter this water and drink first thing in the morning. Tender
              mango leaves are very effective to treat diabetes by regulating
              insulin levels in the blood.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Fenugreek:
            </Text>
            <Text>
              Soak a few seeds (1/4 tsps) of fenugreek in water overnight. First
              thing after you brush your teeth in the morning, gulp down the
              fenugreek along with the water. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5.Indian gooseberry (Amla):
            </Text>
            <Text>
              Extract the juice from the fruit and take 2 teaspoons of the juice
              mixed with a glass of water. Consume this drink daily in the
              morning on an empty stomach to keep your blood sugar level in
              control.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Cinnamon:
            </Text>
            <Text>
              Boil two to four cinnamon sticks in one cup of water and allow it
              to steep for 20 minutes. Drink this solution daily until you see
              improvement. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              7. Indian blackberry (Jamun):
            </Text>
            <Text>
              Eat around 5 – 6 jamuns in the morning to control your blood sugar
              levels.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>8. Neem:</Text>
            <Text>
              Drink the juice of the tender shoot of neem leaves on an empty
              stomach for best results.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Diabetes;

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
