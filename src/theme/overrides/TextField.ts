import { Theme, Components } from "@mui/material/styles";

const MuiTextField: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiInput: Components<Theme>["MuiInput"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiFilledInput: Components<Theme>["MuiFilledInput"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      backgroundColor: theme.palette.background.paper,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
      padding: 0,
    }),
    input: ({ theme, ownerState }) => ({
      padding: "9px 14px",
    }),
    underline: ({ theme, ownerState }) => ({
      "&:before": {
        borderBottom: "2px solid transparent",
      },
      "&:after": {
        border: `1px solid ${theme.palette.success.main}`,
      },
      // ":hover": {
      //   backgroundColor: "transparent",
      //   borderBottom: "2px solid transparent",
      // },
    }),
  },
};

const MuiInputAdornment: Components<Theme>["MuiInputAdornment"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

const MuiInputLabel: Components<Theme>["MuiInputLabel"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};
const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default {
  MuiTextField,
  MuiInput,
  MuiFilledInput,
  MuiInputAdornment,
  MuiInputBase,
  MuiInputLabel,
  MuiOutlinedInput,
};
