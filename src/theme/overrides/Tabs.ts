import { Theme, Components } from "@mui/material/styles";

const MuiTab: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      padding: 0,
      minWidth: "auto",
      minHeight: "24px",
      marginRight: 16,
    }),
  },
};

const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      minHeight: "auto",
    }),
    indicator: ({ theme, ownerState }) => ({
      height: 1,
    }),
  },
};

export default { MuiTab, MuiTabs };
