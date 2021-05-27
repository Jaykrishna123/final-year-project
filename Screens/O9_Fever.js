import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Fever extends Component {
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
          Fever
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/O9_Fever.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Rise in the body temperature than normal is considered as the
              condition of fever. Generally, the normal temperature of human
              being is 98.6 Fahrenheit or 37 Celsius, it may vary in a small
              amount between people to people. When there is small rise in the
              body temperature, it is considered as mild fever or low grade
              fever and only when the body temperature is above 100.4F or 38C,
              it is medically considered fever. You don't have to take medicines
              and treat the low grade fever unless you've faced the symptoms
              fever.Basically, fever is caused when your body is fighting an
              infection, such as flu.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Infections</Text>
            <Text>2.Cold and flu</Text>
            <Text>3.Over-exposure of skin to sunlight</Text>
            <Text>4.Strep throat</Text>
            <Text>5.Chronic Bronchits</Text>
            <Text>6.Sepsis</Text>
            <Text>7.RSV</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>
              1.Rise/elevation in body temperature greater than 100.4 F (38 c)
            </Text>
            <Text>2.Headache</Text>
            <Text>3.Loss of appetite</Text>
            <Text>4.Feeling of tiredness,weakness and dizziness</Text>
            <Text>5.Abdominal Pain</Text>
            <Text>6.Cold and cough</Text>
            <Text>7.Aching muscles and joints</Text>
            <Text>8.Palpitations</Text>
            <Text>9.Sore eyes</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Basil:</Text>
            <Text>
              {" "}
              Extract about 1 tablespoon of basil juice from fresh basil leaves.
              In a cup, mix a tablespoon of each basil juice, ginger juice,
              lemon juice and honey and serve it 2-3 times a day. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>2. Garlic:</Text>
            <Text>
              Finely mince one garlic clove and add it to one cup of hot water.
              Steep for 10 minutes, strain and sip it slowly. Drink this twice a
              day.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Apple Cider vinger:
            </Text>
            <Text>
              Mix two teaspoons of apple cider vinegar and one tablespoon of
              honey in a glass of water. Drink it 2-3 times a day. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Mint:</Text>
            <Text>
              Add one tablespoon of crushed mint leaves to one cup of hot water.
              Allow it to steep for 10 minutes, strain and add some honey and
              then drink it. Repeat this process 3-4 times a day. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5.Besides these:
            </Text>
            <Text>
              -Cover the wet sheet with a large beach towel or blanket, then lie
              down for about 15 minutes. Unwrap yourself when the wet sheet
              starts to get warm.
              {"\n"}
              -Since the vitamin C assists your immune system in fighting off
              infection, consume Orange juice and other fruit juices rich in
              vitamin C.
              {"\n"}
              -Make ginger tea by adding one-half teaspoon of freshly grated
              ginger to one cup of boiling water and letting it steep for a few
              minutes. Add some honey and enjoy this tea three or four times a
              day.
              {"\n"}
              -Drink 8 to 12 glasses of water a day or enough to make your urine
              pale.
              {"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Fever;

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
