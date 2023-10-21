import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

// Overide colors from color pallet for authentifcation pages
export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
