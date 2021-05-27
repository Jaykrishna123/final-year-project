import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Acid_Reflux extends Component {
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
          Acid Reflux
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/S1_Acid_Reflux.png")} />
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
            <Text>1.Hiatal hernia</Text>
            <Text>2.Pregnancy</Text>
            <Text>3.Smoking</Text>
            <Text>4.To little acid</Text>
            <Text>5.Before eating bed</Text>
            <Text>6.Excessive Excercise</Text>
            <Text>7.Taking Medications</Text>
            <Text>8.Being overweight or obese</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Heartburn</Text>
            <Text>2.Regurgitation</Text>
            <Text>3.Bloating</Text>
            <Text>4.Bloody or black stools or bloody vomitimg</Text>
            <Text>5.Burping</Text>
            <Text>6.Dysphagia</Text>
            <Text>7.Hiccups that don't let up</Text>
            <Text>8.Nausea</Text>
            <Text>9.Weight loss for no known reason</Text>
            <Text>10.Wheezing,dry cough,horseness,or chronic sore throat</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. A spoonful of baking soda
            </Text>
            <Text>
              {" "}
              Mix either a 1/2 teaspoon or 1 single teaspoon of baking soda into
              a glass of water that is no more than ounces.Give it a good stir
              and drink all of mixture. You can repeat this as needed but should
              not exceed seven ½ teaspoon doses in a 24 hour period. Also, avoid
              using this as a remedy for more than a week straight, as it is
              high in salt and can have side effects such as swelling or nausea.{" "}
              {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Soothe your stomach with aloe juice:
            </Text>
            <Text>
              Drink a ½ cup of aloe juice, cool or room temperature, before
              meals. Keep in mind that aloe can act as a laxative, so unless
              you’re looking to fit in a few extra bathroom Sudoku puzzles, look
              for a brand that has the laxative component removed.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Chew gum:
            </Text>
            <Text>
              After a meal, pop in a piece of sugar-free gum and chew for 30
              minutes to help ward off heartburn. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Get more acid:
            </Text>
            <Text>
              Mix 3 teaspoons, or up to 1 tablespoon, of apple cider vinegar
              into 6-8 ounces of fresh water, and drink. You can do this before
              each meal, before bedtime, or 2-3 times during the day. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5. Eat a banana or an apple{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Make gingerroot tea. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              7. Avoid tight fitting clothes. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              8. Avoid Smoking, alcohol. {"\n"}{" "}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Acid_Reflux;

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
