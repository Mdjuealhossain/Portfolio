import { FC, useState, useContext } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Stack,
  Typography,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Drawer from "@mui/material/Drawer";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";

import { HeaderProps } from "./Types";
import { ColorModeContext } from "@/theme";
import Sidebar from "../MenuBar";
import Image from "next/image";
import LogoWhite from "../../../public/1.png";
import LogoDark from "../../../public/2.png";
import MenuBar from "../MenuBar";

const Header: FC<HeaderProps> = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode =
    theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
  const logo = theme.palette.mode === "dark" ? LogoDark : LogoWhite;
  return (
    <Box>
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="lg" sx={{ md: { px: 0 } }}>
          <Toolbar disableGutters>
            <Link href="/" flex={1}>
              <Image src={logo} alt="logo" height={32} width={32} />
            </Link>
            <Hidden mdDown implementation="css">
              <Stack flexDirection="row" justifyContent="space-between" gap={4}>
                <Link color="text.primary" href="/about">
                  About
                </Link>
                <Link color="text.primary" href="/resume">
                  Resume
                </Link>
                <Link color="text.primary" href="/portfolio">
                  Portfolio
                </Link>
                <Link color="text.primary" href="/blog">
                  Blog
                </Link>
                <Link color="text.primary" href="/contact">
                  Contact
                </Link>
              </Stack>
            </Hidden>
            <Hidden mdUp implementation="css">
              <IconButton onClick={toggleColorMode}> {mode}</IconButton>
            </Hidden>
            <Hidden mdUp implementation="css">
              <MenuBar />
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
