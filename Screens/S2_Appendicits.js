import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Appendicitis extends Component {
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
          Appendicits
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/S2_Appendicits.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Appendicits is an inflammation of the appendix a finger-shaped
              pouch that project from your colon on the lower right of your
              abdomen. The appendix doesn't seem to have a specific purpose.
              Appendicits causes pain in your lower right abdomen.however,in
              most people , pain begins around the navel and then moves. As
              inflammation worsens ,Appendicits pain tyapically increases and
              envetually becomes severe.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Enlarged Lymphoid Follicles</Text>
            <Text>2.Worms</Text>
            <Text>3.Trauma</Text>
            <Text>4.Tumors</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>1.Nausea and vomitimg</Text>
            <Text>2.Loss of appetitie</Text>
            <Text>
              3.pain when touched on the lower right side of the abdomen
            </Text>
            <Text>4.Diarrhea or constiption</Text>
            <Text>5.Low fever</Text>
            <Text>6.Difficulty in passing gas</Text>
            <Text>7.Abdominal swelling</Text>
            <Text>8.Nausea</Text>
            <Text>9.Diarrhea</Text>
            <Text>10.constiption</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>1. Garlic:</Text>
            <Text>
              Eat 2 to 3 raw garlic cloves on an empty stomach daily. You can
              also use garlic in your cooking. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Green Gram:
            </Text>
            <Text>
              It is one of the most trusted home remedies for appendicitis.
              Appendicitis can be effectively treated with a dosage of 1
              tablespoon of green gram consumed thrice daily.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Castor Oil Pack:
            </Text>
            <Text>
              This can help relieve the appendiceal blockage and reduce
              inflammation. To prepare this, simply fold a large cloth, pour 2
              tablespoons of castor oil on it, and then apply it to your abdomen
              while lying down three times a week for two or three months.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>4. Ginger:</Text>
            <Text>
              Ginger root can reduce inflammation and pain, while alleviating
              vomiting and nausea. Drink fresh ginger tea twice or thrice daily
              or massage ginger oil on your abdomen for a few minutes daily.{" "}
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              5.Fenugreek Seeds:
            </Text>
            <Text>
              Prevent appendicitis by drinking tea made from fenugreek seeds
              regularly, as it prevents the accumulation of intestinal waste and
              excess mucus.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>6. Lemon: </Text>
            <Text>
              Extract fresh juice from 1 lemon and mix it with an equal quantity
              of raw honey. Take this mixture a few times a day. Repeat daily
              for a few weeks.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>7. Basil: </Text>
            <Text>
              It helps bring down the fever that may come with appendicitis.
              It's also great for relieving indigestion and intestinal gas.
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>8. Mint: </Text>
            <Text>
              Mint also helps to relieve the pain due to appendicitis. Every 3
              to 4 hours drink water with 2 to 3 drops of mint essence in it.{" "}
              {"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              9. Drinking plenty of water throughout the day is essential for a
              healthy appendix. {"\n"}{" "}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Appendicitis;

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
