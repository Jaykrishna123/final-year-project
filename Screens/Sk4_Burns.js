import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";

class Burns extends Component {
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
          Burns
        </Text>
        <ScrollView>
          <View style={styles.container5}>
            <Image source={require("../assets/Sk4_Burns.jpg")} />
          </View>
          <View style={styles.container1}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Intro</Text>
            <Text>
              A burn is a type of injury to skin, or other tissues, caused by
              heat, cold, electricity, chemicals, friction, or radiation. Most
              burns are due to heat from hot liquids, solids, or fire. Females
              in many areas of the world have a higher risk related to the more
              frequent use of open cooking fires or unsafe cook stoves.
              Alcoholism and smoking are other risk factors.
            </Text>
          </View>

          <View style={styles.container3}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>causes</Text>
            <Text>1.Fire</Text>
            <Text>2.Hot liguid or stream</Text>
            <Text>3.Hot mental,glass or other objects</Text>
            <Text>4.Electrical currents</Text>
            <Text>
              5.Radiation from X-rays or radiation therapy to treat cancer
            </Text>
            <Text>
              6.Sunlight or ultraviolet light from a sunlamp or tunning bed.
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>Symptoms</Text>
            <Text>Frist-degree burn:{"\n"}</Text>
            <Text>
              This minor burn affects only the outer layer of skin .it may cause
              redness,swelling and pain. Its usually heals with frist-aid
              measure within several days to week. Sunburn is a classic example.
            </Text>
            <Text>Secound-degree burn:{"\n"}</Text>
            <Text>
              This type of burn affects both the epidermis and the secound layer
              of skin (dermis).It may cause red,white or spoloty skin, pain and
              swelling.and the wound aften looks wet or moist. Blisters may
              develop, and pain can be serve. Deep may Secound-degree burns can
              cause Scarring.
            </Text>
            <Text>Third Degree burn:{"\n"}</Text>
            <Text>
              This burn reaches into the fat layer beneath the skin. burned
              areas may be charred black or white. The skin may look waxy or
              leathery.Third degree burnscan destroy nerves ,causing n Person
              with this type of burn may also have diffculty breathing
              experiance smoke inhalation or carbon monoxide poising.{" "}
            </Text>
          </View>

          <View style={styles.container4}>
            <Text style={{ fontSize: 20, textAlign: "auto" }}>
              Home Remidies
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              1. Raw Potato:
            </Text>
            <Text>
              {" "}
              Simply cut a slice of raw potato and rub it on the burn, making
              sure the juice from the potato is releasing over the area.{
                "\n"
              }{" "}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              2. Cold Water:
            </Text>
            <Text>
              {" "}
              Stop a burn from spreading by running cold water over the burn
              area for several minutes within seconds of being burned.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              3. Aloe Vera:
            </Text>
            <Text>
              Cut a small piece of the aloe vera leaf and apply the fresh gel
              directly on the burn.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              4. Lemon Juice and Coconut Oil:
            </Text>
            <Text>
              Combine lemon juice and coconut oil. Mix equal parts of them and
              apply it directly to the scalds.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>5. Vinegar:</Text>
            <Text>
              Put a cotton ball in white vinegar and dab it carefully to the
              affected burnt skin. You may also use compress and soaked it into
              mixture of water and vinegar.{"\n"}
            </Text>

            <Text style={{ fontSize: 15, textAlign: "auto" }}>
              6. Ice Cube:
            </Text>
            <Text>
              Use an ice cube and put it in the affected area. For best results,
              rinse the ice cube with some water to avoid it from sticking in
              the tongue.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Burns;

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
