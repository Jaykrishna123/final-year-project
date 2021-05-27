import React from "react";
import { ActivityIndicator } from "react-native";
import firebase from "firebase/app";
import Background from "../Componets/Background";
import { theme } from "../core/theme";

const AuthLoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeApp" }],
      });
    } else {
      // User is not logged in
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeScreen" }],
      });
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default AuthLoadingScreen;
