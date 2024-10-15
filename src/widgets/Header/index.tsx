import { FC, useContext } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Stack,
  Hidden,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "@/theme";

import HeaderLanguage from "../HeaderLanguage";
import MenuBar from "../MenuBar";
// import LogoWhite from "../../../public/img/1.png";
// import LogoDark from "../../../public/img/2.png";

import { HeaderProps } from "./Types";

const Header: FC<HeaderProps> = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode =
    theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
  // const logo = theme.palette.mode === "dark" ? LogoDark : LogoWhite;
  const pathname = usePathname();
  return (
    <Box>
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="lg" sx={{ md: { px: 0 } }}>
          <Toolbar disableGutters>
            <Link href="/" flex={1}>
              <Image src="" alt="logo" height={32} width={32} />
            </Link>
            <Hidden mdDown implementation="css">
              <Stack flexDirection="row" justifyContent="space-between" gap={4}>
                <Link
                  sx={{
                    color:
                      pathname === "/about" ? "success.main" : "text.primary",
                  }}
                  href="/about"
                >
                  About
                </Link>
                <Link
                  sx={{
                    color:
                      pathname === "/resume" ? "success.main" : "text.primary",
                  }}
                  href="/resume"
                >
                  Resume
                </Link>
                <Link
                  sx={{
                    color:
                      pathname === "/portfolio"
                        ? "success.main"
                        : "text.primary",
                  }}
                  href="/portfolio"
                >
                  Portfolio
                </Link>
                <Link
                  sx={{
                    color:
                      pathname === "/blog" ? "success.main" : "text.primary",
                  }}
                  href="/blog"
                >
                  Blog
                </Link>
                <Link
                  sx={{
                    color:
                      pathname === "/contact" ? "success.main" : "text.primary",
                  }}
                  href="/contact"
                >
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
            <HeaderLanguage />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
