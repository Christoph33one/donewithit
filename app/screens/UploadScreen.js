import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../components/AppText";

// Model for progress bar on data upload
function UploadScreen({ progree = 0, visable = false }) {
  return (
    <Modal visible={visable}>
      <View style={styles.container}>
        <AppText>{process * 100}%</AppText>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
