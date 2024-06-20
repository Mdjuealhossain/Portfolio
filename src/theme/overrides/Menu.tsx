import { Theme, Components } from "@mui/material/styles";

const MuiMenu: Components<Theme>["MuiMenu"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
    paper: ({ theme, ownerState }) => ({
      background: theme.palette.background.default,
    }),
  },
};

const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default {
  MuiMenu,
  MuiMenuItem,
};
