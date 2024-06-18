"use client";
import { FC, useContext } from "react";

import { Box, Hidden, IconButton, Stack } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";

import { AppLayoutProps } from "./type";
import Header from "@/widgets/Header";
import { ColorModeContext } from "@/theme";

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
      borderRadius="32px 0 0 31px"
    >
      <IconButton onClick={toggleColorMode} sx={{ height: 60, width: 50 }}>
        {mode}
      </IconButton>
    </Box>
  );
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Hidden mdDown>
        <Box position="absolute" right={0} top={400}>
          <ColorMode />
        </Box>
      </Hidden>
      <Box>
        <Header />
      </Box>
      <Box pt={8}>{children}</Box>
    </>
  );
};

export default AppLayout;
