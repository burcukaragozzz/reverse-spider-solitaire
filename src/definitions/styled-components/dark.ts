// #region Global Imports
import { DefaultTheme } from "styled-components/macro";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
  colors: {
    ...common.colors,
    toggleBorder: "#556678",
    gradient: "linear-gradient(45deg, #4D536E, #FFFFFF)",
    background: "#2F3138",
    headerBg: "#20232A",
    cardsBg: "#1A1C22",
    borderColor: "#FFFFFF",
    dodgerBlue: "#0062CC",
  },
};

export { dark };
