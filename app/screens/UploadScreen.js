import React from "react";
import { View, StyleSheet, Modal } from "react-native";

// Error with importing and using Progree bar?
// import * as Progress from "react-native-progress";

import LottieView from "lottie-react-native";
import colors from "../config/colors";

// Model for progress bar on data loading
// Not using this Progress bar component as it is not wokring correctly!
function UploadScreen({ onDone, progress = 0, visible = false }) {
  return <Modal visible={visible}></Modal>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  animation: {
    width: 150,
  },
});

// <View style={styles.container}></View>;
// {
//   progress < 1 ? (
//     <ProgressBar color={colors.primary} progress={progress} />
//   ) : (
//     <LottieView
//       autoPlay
//       loop={false}
//       onAnimationFinish={onDone}
//       source={require("../assets/animations/done.json")}
//       style={styles.animation}
//     />
//   );
// }

export default UploadScreen;
