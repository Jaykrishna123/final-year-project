import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Boils extends Component {
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
          Boils
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk2_Boils.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              A boil, also called a furuncle, is a deep folliculitis, infection
              of the hair follicle. It is most commonly caused by infection by
              the bacterium Staphylococcus aureus, resulting in a painful
              swollen area on the skin caused by an accumulation of pus and dead
              tissue. Boils which are expanded are basically pus-filled nodules.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Poor hygiene</Text>
            <Text>2.Poor immune system</Text>
            <Text>3.Alcoholism</Text>
            <Text>4.Friction from tight clothing</Text>
            <Text>5.Diabetes</Text>
            <Text>6.Chemotherapy</Text>
            <Text>7.Exposure to harsh chemicals</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.High fever </Text>
            <Text>2.Even after several days, the boil does not drain out.</Text>
            <Text>3.Red streaks on skin</Text>
            <Text>4.Severe Pain</Text>
            <Text>5.diabetes or heart disorders</Text>
            <Text>6.Swelling</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Black Seeds:
            </Text>
            <Text>
              {" "}
              Take some black seeds (kalonji). Grind them to get a paste. Apply
              this paste on the affected area.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Bread Poultice:
            </Text>
            <Text>
              You are required to soak a slice of bread in warm water or milk.
              Place the soaked bread directly on the boil. On repeating the
              process twice a day, the boil will disappear naturally.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Indian Lilac (Neem):
            </Text>
            <Text>
              Grind a handful of neem leaves to get a paste. Apply it on the
              affected area.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Tea Tree Oil:
            </Text>
            <Text>
              To heal the boil, apply one drop of tea tree oil directly on the
              boil. Note: Do not consume tea tree oil internally.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Turmeric:
            </Text>
            <Text>
              Boil one teaspoon of turmeric powder in a glass of milk or water.
              Drink it three times a day for four to five days.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. White Egg:
            </Text>
            <Text>
              Take one egg. Boil it and peel it. Wet the white of the egg and
              apply directly on the boil. Cover it with a clean cloth.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>7. Garlic:</Text>
            <Text>
              Prepare a paste of fresh garlic cloves. Apply it directly on the
              boil.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Boils;

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
