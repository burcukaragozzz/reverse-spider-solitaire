// #region Global Imports
import { DefaultTheme } from "styled-components/macro";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
  colors: {
    ...common.colors,
    toggleBorder: "#556678",
    gradient: "linear-gradient(45deg, #4d536e, #ffffff)",
    background: "#20232A",
    headerBg: "#1A1C22",
    cardsBg: "#1A1C22",
    borderColor: "#FFFFFF",
    dodgerBlue: "#0062CC",
  },
};

export { dark };
