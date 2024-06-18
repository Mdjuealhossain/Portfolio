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
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="lg" sx={{ px: 0 }}>
          <Toolbar disableGutters>
            <Link href="/" flex={1}>
              <Image src={logo} alt="logo" height={32} width={32} />
            </Link>
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
