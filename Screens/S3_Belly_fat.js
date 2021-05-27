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
          Belly_Fat
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/S3_Belly_fat.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Belly fat is an excessive fat in the abdomen and around the
              stomach. It looks odd when you wear tight clothes and causes
              embarrassment. In fact, it’s difficult to lose flab from the belly
              region. Many people try to lose belly fat by eating less or
              famishing themselves, which is not at all a good idea and may
              result in several harmful side-effects. The healthy way to trim
              down your tummy is to use natural home remedies.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Eating to manny Calories</Text>
            <Text>2.Stress</Text>
            <Text>3.Junk food</Text>
            <Text>4.Harmonal Imbalances</Text>
            <Text>5.Genetics</Text>
            <Text>6.Sedentary lifestyles</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Fatigue</Text>
            <Text>2.An enlarging ,fuild-filled abdomen</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1.Drink Lots Of Water:
            </Text>
            <Text>
              Taking the recommended eight glasses of water per day will not
              only help with your digestion but it will also increase your
              metabolism and help reduce bloating. Instead of taking a sugary
              drink, replace it with water so as to reduce your calorie intake.
              If water feels a little too bland, add a splash of lime or lemon
              to make it a little bit more exciting. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Drink Green Tea Every Day:
            </Text>
            <Text>
              Trade in your regular cup of coffee for some green tea and take
              about four to five cups daily for the best results. Avoid taking
              green tea that contains sugar so as not to override its health
              benefits. .{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Tomatoes</Text>
            <Text>
              Eating raw tomatoes also helps in reducing the belly fat.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Ginger:</Text>
            <Text>
              Steep water and add ginger to it. Then, add honey and pepper.
              Simmer it for 5 minutes. Honey helps in dissolving the fat while
              ginger and pepper will increase the metabolic rate.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5.Garlic:</Text>
            <Text>
              In order to reduce belly fat, chew 3-4 cloves of raw garlic in the
              morning and drink the lemon water after consuming garlic. This is
              the best home remedy to reduce belly fat fast.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>6. Lemon: </Text>
            <Text>
              Drinking lemon juice on the daily basis will definitely reduce the
              belly fat soon. Add lemon juice in a glass of water. Also add a
              pinch of salt. Stir it well. Drink this every morning.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              7. Incorporate Coconut Oil In Your Diet.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              8.Have A Go-To Stress Reliever {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              9. Increase Your Protein Intake.{"\n"}
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
