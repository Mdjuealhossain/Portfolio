"use client";
import { FC, useContext } from "react";

import { Box, Hidden, IconButton, Stack } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";

import { AppLayoutProps } from "./type";
import Header from "@/widgets/Header";
import { ColorModeContext } from "@/theme";
import ChatMe from "@/widgets/ChatMe";

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box position="relative">
      <Hidden mdDown>
        <Box
          position="fixed"
          right="0%"
          top="50%"
          // sx={{ transform: "translate(-50%, -50%)" }}
        >
          <ColorMode />
        </Box>
      </Hidden>
      <ChatMe />
      <Box>
        <Header />
      </Box>
      <Box pt={8}>{children}</Box>
    </Box>
  );
};

export default AppLayout;

const ColorMode = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode =
    theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.success.light,
      })}
      justifyContent="center"
      alignItems="center"
      borderRadius="12px 0 0 12px"
    >
      <IconButton onClick={toggleColorMode} sx={{ height: 48, width: 48 }}>
        {mode}
      </IconButton>
    </Box>
  );
};
