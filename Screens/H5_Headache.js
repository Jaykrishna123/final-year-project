import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Headache extends Component {
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
          Headache{" "}
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/H5_Headache.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Headaches are one of the most common health problems that affects
              most people at one time or another. Although most headaches are
              mild and temporary annoyances, some people have headaches that are
              so severe they need treatment. Headaches are one of the most
              common ailments, with most people experiencing a headache at some
              point in their life. They can affect anyone regardless of age,
              race and gender.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Prolonged tension or stress</Text>
            <Text>2.Fatigue </Text>
            <Text>3.Overuse of pain medication</Text>
            <Text>4.Lashing lights </Text>
            <Text>5.Lack of food or sleep</Text>
            <Text>6.Hormonal changes</Text>
            <Text>7.Caffeine</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Pain in eyes when looking inth bright lights</Text>
            <Text>2.Nausea</Text>
            <Text>3.Vomiting</Text>
            <Text>4.Dizziness </Text>
            <Text>5.Tenderness of the scalp</Text>
            <Text>6.Stroke</Text>
            <Text>7.Tightness sensation in the head</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Ginger:</Text>
            <Text>
              Peel the small piece of ginger and extract two tablespoon of
              ginger. Boil the ginger juice in water for two minutes, add little
              two tablespoon lemon juice in it. Then, serve it . Repeat this
              process three to four times a day.{"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Ice Pack:
            </Text>
            <Text>
              Applying an ice pack to the back of your neck to feel relieved
              from headache.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Basil:</Text>
            <Text>
              Extract about 1 tablespoon of basil juice from fresh basil leaves.
              In a cup, mix a tablespoon of each basil juice, ginger juice,
              lemon juice and honey and serve it 2-3 times a day. {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Apple:</Text>
            <Text>
              Mix half cup of apple cider vinegar with half cup of water and
              boil the mixture in a covered saucepan. Remove from heat, hold a
              towel over your head and slowly inhale the steam. This will
              provide instant relief from sinus headaches. If you feel headache,
              just eat a piece of sprinkled apple with salt, and drink some warm
              water after.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5.Rosemary</Text>
            <Text>
              Dab a drop or two of thyme or rosemary essential oil on each
              temple and on your forehead. Rub gently into the skin, then sit
              quietly for several minutes.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Cinnamon:
            </Text>
            <Text>
              Grind some cinnamon sticks into a powder, and add some water to
              make a thick paste. Apply it on your forehead and lie down for 30
              minutes. Then wash it off with lukewarm water.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Headache;

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
