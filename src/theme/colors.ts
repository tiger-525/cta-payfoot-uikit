import { Colors } from "./types";

export const baseColors = {
  failure: "#cd3e5f",
  primary: "#004aad",
  primaryBright: "#0466c8",
  primaryDark: "#003566",
  secondary: "#457b9d",
  success: "#2E8BC0",
  warning: "#ff7900",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#457b9d",
  textDisabled: "#BDC2C4",
  textSubtle: "#003566",
  borderColor: "#457b9d",
  card: "#FFFFFF",
  nav: "#f9fdf9",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #DFEFFF 0%, #555ADA 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#457b9d",
  tertiary: "457b9d",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#003566",
  borderColor: "#0899BA",
  card: "#27262c",
  nav: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
