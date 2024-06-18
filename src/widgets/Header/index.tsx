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
import Sidebar from "../Sidebar";
import Image from "next/image";
import LogoWhite from "../../../public/1.png";
import LogoDark from "../../../public/2.png";

const Header: FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode =
    theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
  const logo = theme.palette.mode === "dark" ? LogoDark : LogoWhite;
  return (
    <Box>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/" flex={1} pl={4}>
              <Image src={logo} alt="logo" height={32} width={32} />
            </Link>
            <Stack
              pr={4}
              flexDirection="row"
              justifyContent="space-between"
              gap={4}
            >
              <Link href="/about">About</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blog">log</Link>
              <Link href="/contact">Contact</Link>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)} elevation={0}>
        <Sidebar onClose={() => setOpen(false)} />
      </Drawer>
    </Box>
  );
};

export default Header;
