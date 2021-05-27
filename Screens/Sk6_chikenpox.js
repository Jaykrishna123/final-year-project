import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class chikenpox extends Component {
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
          Chikenpox
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk6_chikenpox.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              Chickenpox is a contagious disease characterized by many itchy,
              red bumps all over the body. Chickenpox illness usually lasts
              about 5 to7 days. Chickenpox was once so common it was considered
              a childhood rite of passage. Since the chickenpox vaccine was
              introduced in the mid-1990s, cases have declined.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Causes</Text>
            <Text>1.Varicella-z0ster virus</Text>
            <Text>2.Contact with an infected person</Text>
            <Text>3.contact with broken chikenpox blisters</Text>
            <Text>4.Inhaling airborne dropets </Text>
            <Text>5.Poor immune system</Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>
              Rashes that turn intoitchy,fluid-filled blisters those eventually
              turn into scabs.
            </Text>
            <Text>Fever</Text>
            <Text>Headache</Text>
            <Text>Tiredness and a general feeling of being unwell</Text>
            <Text>Loss of appetite</Text>
            <Text>Dry cough</Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Baking Soda:
            </Text>
            <Text>
              Take half a cup of baking soda and mix it with warm water prepared
              for taking bath. Let the patient bathe with this water. You can
              even have cool bath instead of warm bath. {"\n"}{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Indian Lilac (Neem):
            </Text>
            <Text>
              Mash a handful of neem leaves to make a mild paste and apply on
              the blistered regions. Strew these leaves in bathing hot water and
              allow it to steep for a few minutes and have a bath in this
              neem-soaked water.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>3. Honey:</Text>
            <Text>
              Get a good quality, pure honey and coat the affected area with it.
              Repeat the process two to three times a day until the scars are
              gone.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Aloe Vera:
            </Text>
            <Text>
              Cut open a fresh Aloe Vera leaf and apply the gel directly to
              chickenpox. Let it absorb and dry completely. Apply regularly to
              cure chickenpox.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5. Oatmeal:</Text>
            <Text>
              Fill a bathtub with warm water and blend 2 cups of oatmeal in a
              blender to get a fine powder. While the bathtub is filling up,
              swirl the powder around into the water. Soak in the milky water.
              Bits of oatmeal will be left on your skin and hair; however, it
              will relieve the itchiness of your skin.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Brown Vinegar:
            </Text>
            <Text>
              Add 1 cup of brown vinegar to lukewarm bathwater. Mix well and
              soak for 10 minutes to heal lesions and prevent scars.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              7. Lavender Oil:
            </Text>
            <Text>
              Add a few drops each of lavender and chamomile essential oils in
              lukewarm water and soak in this bath for about 10 minutes.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              8. Carrot and Coriander::
            </Text>
            <Text>
              Slice a carrot and chop some coriander leaves to tiny pieces and
              boil them in half a cup of water for few minutes. Filter and drink
              it when it is lukewarm on a daily basis for a month or so for a
              swift and sooner recovery.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default chikenpox;

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
