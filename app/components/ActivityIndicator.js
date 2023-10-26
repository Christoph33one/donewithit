import React from "react";
import LottieView from "lottie-react-native";

// Loading animated indicator when fetching data
function ActivityIndicator({ visable = false }) {
  if (!visable) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/Animation1.json")}
    />
  );
}

export default ActivityIndicator;
