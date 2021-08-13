// #region Global Imports
import { DefaultTheme } from "styled-components/macro";
// #endregion Global Imports
import { common } from "./common";

const light: DefaultTheme = {
  colors: {
    ...common.colors,
    toggleBorder: "#ABB7C4",
    gradient: "linear-gradient(45deg, #FFFFFF, #AB423C)",
    background: "#EFF1f5",
    headerBg: "#37783C",
    cardsBg: "#FFFFFF",
    borderColor: "#000000",
    dodgerBlue: "#007BFF",
  },
};

export { light };
