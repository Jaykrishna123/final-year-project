import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase/app";
import "firebase/auth";
import { theme } from "./core/theme";
import {
  AuthLoadingScreen,
  HomeApp,
  BmiScreen,
  BodyPartsPage,
  HeadDisease,
  H1AbscessTooth,
  H2_black_eyes,
  H3_earache,
  H4_eye_pain,
  H5_Headache,
  H6_hoarseness,
  H7_Migraine_headache,
  H8_sinusitis,
  H9_Sore_Throat,
  H10_tinnitus,
  H11_Tooth_Pain,
  ChestDisease,
  C1_Angina,
  C2_Asthma,
  C3_HeartBurn,
  C4_Hiccup,
  StomachDisease,
  S1_Acid_Reflux,
  S2_Appendicits,
  S3_Belly_fat,
  S4_Constipations,
  S5_Dysmenorheas,
  S6_Gastritis,
  S7_Indigenstion,
  S8_KidneyStone,
  S9_PMS,
  HandDisease,
  H1_Arthritis,
  H2_Sprain,
  H3_VaricoseVeins,
  LegDisease,
  L1_athletes,
  L2_gout,
  L3_Knee_Pain,
  BackDisease,
  B1_back_pain,
  B2_osteoporosis,
  SkinDisease,
  Sk1_Acne,
  Sk2_Boils,
  Sk3_Bruise,
  Sk4_Burns,
  Sk5_Chapped_crackedLips,
  Sk6_chikenpox,
  Sk7_corns_calluses,
  Sk8_Dry_Skin,
  Sk9_Hives,
  Sk10_Measles,
  Sk11_PingmentationOnSkin,
  Sk12_Ringworm,
  OtherDisease,
  O1_Low_BP,
  O2_High_BP,
  O3_High_cholesterol,
  O4_Insomina,
  O5_Acidic_Body,
  O6_malaria,
  O7_Diabetes,
  O8_Cough,
  O9_Fever,
  BloodScreen,
  BloodProfileScreen,
  DoctorScreen,
  DoctProfileScreen,
  CalendarScreen,
  CalendarScreen2,
  SlotScreen,
  SlotScreen2,
  Appointmentform,
} from "./Screens";

import HomeScreen from "./Componets/Home";
import LoginScreen from "./Componets/Login";
import RegisterScreen from "./Componets/Register";

import { FIREBASE_CONFIG } from "./core/config";
import ResetPassword from "./Componets/ResetPassword";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#54a0ff"
          translucent={true}
        />
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#54a0ff",
              height: 80,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ title: "Register" }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{ title: "Reset Password" }}
          />
          <Stack.Screen
            name="HomeApp"
            component={HomeApp}
            options={{ title: "Dashboard", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="BmiScreen"
            component={BmiScreen}
            options={{ title: "Bmi Calculator" }}
          />
          <Stack.Screen name="BodyPartsPage" component={BodyPartsPage} />

          <Stack.Screen name="HeadDisease" component={HeadDisease} />
          <Stack.Screen name="H1AbscessTooth" component={H1AbscessTooth} />
          <Stack.Screen name="H2_black_eyes" component={H2_black_eyes} />
          <Stack.Screen name="H3_earache" component={H3_earache} />
          <Stack.Screen name="H4_eye_pain" component={H4_eye_pain} />
          <Stack.Screen name="H5_Headache" component={H5_Headache} />
          <Stack.Screen name="H6_hoarseness" component={H6_hoarseness} />
          <Stack.Screen
            name="H7_Migraine_headache"
            component={H7_Migraine_headache}
          />
          <Stack.Screen name="H8_sinusitis" component={H8_sinusitis} />
          <Stack.Screen name="H9_Sore_Throat" component={H9_Sore_Throat} />
          <Stack.Screen name="H10_tinnitus" component={H10_tinnitus} />
          <Stack.Screen name="H11_Tooth_Pain" component={H11_Tooth_Pain} />

          <Stack.Screen name="ChestDisease" component={ChestDisease} />
          <Stack.Screen name="C1_Angina" component={C1_Angina} />
          <Stack.Screen name="C2_Asthma" component={C2_Asthma} />
          <Stack.Screen name="C3_HeartBurn" component={C3_HeartBurn} />
          <Stack.Screen name="C4_Hiccup" component={C4_Hiccup} />

          <Stack.Screen name="StomachDisease" component={StomachDisease} />
          <Stack.Screen name="S1_Acid_Reflux" component={S1_Acid_Reflux} />
          <Stack.Screen name="S2_Appendicits" component={S2_Appendicits} />
          <Stack.Screen name="S3_Belly_fat" component={S3_Belly_fat} />
          <Stack.Screen name="S4_Constipations" component={S4_Constipations} />
          <Stack.Screen name="S5_Dysmenorheas" component={S5_Dysmenorheas} />
          <Stack.Screen name="S6_Gastritis" component={S6_Gastritis} />
          <Stack.Screen name="S7_Indigenstion" component={S7_Indigenstion} />
          <Stack.Screen name="S8_KidneyStone" component={S8_KidneyStone} />
          <Stack.Screen name="S9_PMS" component={S9_PMS} />

          <Stack.Screen name="BackDisease" component={BackDisease} />
          <Stack.Screen name="B1_back_pain" component={B1_back_pain} />
          <Stack.Screen name="B2_osteoporosis" component={B2_osteoporosis} />

          <Stack.Screen name="HandDisease" component={HandDisease} />
          <Stack.Screen name="H1_Arthritis" component={H1_Arthritis} />
          <Stack.Screen name="H2_Sprain" component={H2_Sprain} />
          <Stack.Screen name="H3_VaricoseVeins" component={H3_VaricoseVeins} />

          <Stack.Screen name="LegDisease" component={LegDisease} />
          <Stack.Screen name="L1_athletes" component={L1_athletes} />
          <Stack.Screen name="L2_gout" component={L2_gout} />
          <Stack.Screen name="L3_Knee_Pain" component={L3_Knee_Pain} />

          <Stack.Screen name="SkinDisease" component={SkinDisease} />
          <Stack.Screen name="Sk1_Acne" component={Sk1_Acne} />
          <Stack.Screen name="Sk2_Boils" component={Sk2_Boils} />
          <Stack.Screen name="Sk3_Bruise" component={Sk3_Bruise} />
          <Stack.Screen name="Sk4_Burns" component={Sk4_Burns} />
          <Stack.Screen
            name="Sk5_Chapped_crackedLips"
            component={Sk5_Chapped_crackedLips}
          />
          <Stack.Screen name="Sk6_chikenpox" component={Sk6_chikenpox} />
          <Stack.Screen
            name="Sk7_corns_calluses"
            component={Sk7_corns_calluses}
          />
          <Stack.Screen name="Sk8_Dry_Skin" component={Sk8_Dry_Skin} />
          <Stack.Screen name="Sk9_Hives" component={Sk9_Hives} />
          <Stack.Screen name="Sk10_Measles" component={Sk10_Measles} />
          <Stack.Screen
            name="Sk11_PingmentationOnSkin"
            component={Sk11_PingmentationOnSkin}
          />
          <Stack.Screen name="Sk12_Ringworm" component={Sk12_Ringworm} />

          <Stack.Screen name="OtherDisease" component={OtherDisease} />
          <Stack.Screen name="O1_Low_BP" component={O1_Low_BP} />
          <Stack.Screen name="O2_High_BP" component={O2_High_BP} />
          <Stack.Screen
            name="O3_High_cholesterol"
            component={O3_High_cholesterol}
          />
          <Stack.Screen name="O4_Insomina" component={O4_Insomina} />
          <Stack.Screen name="O5_Acidic_Body" component={O5_Acidic_Body} />
          <Stack.Screen name="O6_malaria" component={O6_malaria} />
          <Stack.Screen name="O7_Diabetes" component={O7_Diabetes} />
          <Stack.Screen name="O8_Cough" component={O8_Cough} />
          <Stack.Screen name="O9_Fever" component={O9_Fever} />

          <Stack.Screen name="BloodScreen" component={BloodScreen} />
          <Stack.Screen
            name="BloodProfileScreen"
            component={BloodProfileScreen}
          />
          <Stack.Screen name="DoctorScreen" component={DoctorScreen} />
          <Stack.Screen
            name="DoctProfileScreen"
            component={DoctProfileScreen}
          />
          <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
          <Stack.Screen name="CalendarScreen2" component={CalendarScreen2} />
          <Stack.Screen name="SlotScreen" component={SlotScreen} />
          <Stack.Screen name="SlotScreen2" component={SlotScreen2} />
          <Stack.Screen name="Appointmentform" component={Appointmentform} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
