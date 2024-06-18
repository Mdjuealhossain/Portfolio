import { Theme, Components } from "@mui/material/styles";

const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      background: theme.palette.background.default,
      backdropFilter: "blur(.8)",
    }),
  },
};

const MuiToolbar: Components<Theme>["MuiToolbar"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({}),
  },
};

export default { MuiAppBar, MuiToolbar };
