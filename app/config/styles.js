import { Platform } from "react-native";

import colors from "./colors";

// Text styling for IOS & Android using export default
export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
