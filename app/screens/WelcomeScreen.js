import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";
// import colors from "../config/colors";
import AppButton from "../components/AppButton";

import AppText from "../components/AppText";

// Home screen component
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/backgroundimage.jpg")}
    >
      <View style={styles.logoContainer}>
        <AppText>Sell What You Don't Need</AppText>
        <Image
          style={styles.logo}
          source={require("../assets/redlogo.png")}
        ></Image>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

// Styling props
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
