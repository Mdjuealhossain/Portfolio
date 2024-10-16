import {
  TypographyVariants as TypographyVariantsOption,
  createTheme,
} from "@mui/material/styles";
import { Poppins } from "next/font/google";
import breakpoints from "./breakpoints";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export interface TypographyVariants extends TypographyVariantsOption {}
const theme = createTheme({ breakpoints });

export default {
  fontFamily: `${poppins.style.fontFamily}`,
  htmlFontSize: 16,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    ...poppins.style,
    fontWeight: 600,
    fontSize: "3.75rem", //60px
    lineHeight: "normal",
    letterSpacing: "0em",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  },
  h2: {
    ...poppins.style,
    fontWeight: 600,
    fontSize: "2.875rem", //46px
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.25rem",
    },
  },
  h3: {
    ...poppins.style,
    fontWeight: 700,
    fontSize: "2.375rem", //38px
    lineHeight: "normal",
    letterSpacing: "0em",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.125rem",
    },
  },
  h4: {
    ...poppins.style,
    fontWeight: 400,
    fontSize: "1.938rem", //31px
    lineHeight: 1.6,
    letterSpacing: "0.00735em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.625rem",
    },
  },
  h5: {
    ...poppins.style,
    fontWeight: 500,
    fontSize: "1.625rem", //26px
    lineHeight: 1.334,
    letterSpacing: "0.0075em",
  },
  h6: {
    ...poppins.style,
    fontWeight: 500,
    fontSize: "1.5rem", //24px
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.125rem",
    },
  },
  subtitle1: {
    ...poppins.style,
    fontWeight: 500,
    fontSize: "1.25rem", //20px
    lineHeight: "normal",
    letterSpacing: "0.00938em",
  },
  subtitle2: {
    ...poppins.style,
    fontWeight: 500,
    fontSize: "0.875rem", //14px
    lineHeight: 1.57,
    letterSpacing: "0.00714em",
  },
  body1: {
    ...poppins.style,
    fontWeight: 400,
    fontSize: "0.938rem",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
    },
  },
  body2: {
    ...poppins.style,
    fontWeight: 400,
    fontSize: "0.938rem", //15px
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
    },
  },
  button: {
    ...poppins.style,
    fontWeight: 400,
    fontSize: "0.875rem", //14px
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
  },
  caption: {
    ...poppins.style,
    fontWeight: 400,
    fontSize: "0.875rem", //14px
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
  },
  overline: {
    ...poppins.style,
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "14.06px",
    letterSpacing: "0.08333em",
    textTransform: "uppercase",
  },
} as TypographyVariants;
