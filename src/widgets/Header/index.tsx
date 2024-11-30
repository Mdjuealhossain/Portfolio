import { FC, useContext } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Box, Container, AppBar, Toolbar, Link, IconButton, Stack, Hidden } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ColorModeContext } from "@/theme";
import { useTheme } from "@mui/material/styles";

import HeaderLanguage from "../HeaderLanguage";
import MenuBar from "../MenuBar";
import { HeaderProps } from "./Types";

const Header: FC<HeaderProps> = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  // dark light mode
  const mode = theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
  const logo = theme.palette.mode === "dark" ? "/assets/images/logo/darkLogo.png" : "/assets/images/logo/lightLogo.png";
  // path name
  const fullPathname = usePathname(); // E.g., "/bn/about" or "/en/contact"
  const parts = fullPathname.split("/").filter(Boolean); // ["bn", "about"]
  const pathname = parts.slice(1).join("/"); // "about" (remaining path)
  console.log("first", pathname);

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
                <Link
                  sx={{
                    "&:hover > .hover-box > .hover-divider": {
                      width: "100%",
                    },
                    "&:hover > .hover-box > .hover-dot": {
                      opacity: 1,
                    },
                    color: pathname === "about" ? "success.main" : "text.primary",
                  }}
                  href="/about"
                >
                  About
                  <Stack className="hover-box" component="span" flexDirection="row" alignItems="center">
                    <Box
                      className="hover-divider"
                      display="inline-block"
                      component="span"
                      sx={{
                        height: "1px",
                        backgroundColor: "success.main",
                        transition: "width 0.4s ease-in-out",
                        width: "0",
                      }}
                    />
                    <Box
                      component="span"
                      className="hover-dot"
                      sx={{
                        height: ".35rem",
                        width: ".35rem",
                        backgroundColor: "success.main",
                        borderRadius: "100%",
                        opacity: 0,
                      }}
                    />
                  </Stack>
                </Link>
                <Link
                  sx={{
                    "&:hover > .hover-box > .hover-divider": {
                      width: "100%",
                    },
                    "&:hover > .hover-box > .hover-dot": {
                      opacity: 1,
                    },
                    color: pathname === "resume" ? "success.main" : "text.primary",
                  }}
                  href="/resume"
                >
                  Resume
                  <Stack className="hover-box" component="span" flexDirection="row" alignItems="center">
                    <Box
                      className="hover-divider"
                      display="inline-block"
                      component="span"
                      sx={{
                        height: "1px",
                        backgroundColor: "success.main",
                        transition: "width 0.4s ease-in-out",
                        width: "0",
                      }}
                    />
                    <Box
                      component="span"
                      className="hover-dot"
                      sx={{
                        height: ".35rem",
                        width: ".35rem",
                        backgroundColor: "success.main",
                        borderRadius: "100%",
                        opacity: 0,
                      }}
                    />
                  </Stack>
                </Link>
                <Link
                  sx={{
                    "&:hover > .hover-box > .hover-divider": {
                      width: "100%",
                    },
                    "&:hover > .hover-box > .hover-dot": {
                      opacity: 1,
                    },
                    color: pathname === "portfolio" ? "success.main" : "text.primary",
                  }}
                  href="/portfolio"
                >
                  Portfolio
                  <Stack className="hover-box" component="span" flexDirection="row" alignItems="center">
                    <Box
                      className="hover-divider"
                      display="inline-block"
                      component="span"
                      sx={{
                        height: "1px",
                        backgroundColor: "success.main",
                        transition: "width 0.4s ease-in-out",
                        width: "0",
                      }}
                    />
                    <Box
                      component="span"
                      className="hover-dot"
                      sx={{
                        height: ".35rem",
                        width: ".35rem",
                        backgroundColor: "success.main",
                        borderRadius: "100%",
                        opacity: 0,
                      }}
                    />
                  </Stack>
                </Link>
                <Link
                  sx={{
                    "&:hover > .hover-box > .hover-divider": {
                      width: "100%",
                    },
                    "&:hover > .hover-box > .hover-dot": {
                      opacity: 1,
                    },
                    color: pathname === "blog" ? "success.main" : "text.primary",
                  }}
                  href="/blog"
                >
                  Blog
                  <Stack className="hover-box" component="span" flexDirection="row" alignItems="center">
                    <Box
                      className="hover-divider"
                      display="inline-block"
                      component="span"
                      sx={{
                        height: "1px",
                        backgroundColor: "success.main",
                        transition: "width 0.4s ease-in-out",
                        width: "0",
                      }}
                    />
                    <Box
                      component="span"
                      className="hover-dot"
                      sx={{
                        height: ".35rem",
                        width: ".35rem",
                        backgroundColor: "success.main",
                        borderRadius: "100%",
                        opacity: 0,
                      }}
                    />
                  </Stack>
                </Link>
                <Link
                  sx={{
                    "&:hover > .hover-box > .hover-divider": {
                      width: "100%",
                    },
                    "&:hover > .hover-box > .hover-dot": {
                      opacity: 1,
                    },
                    color: pathname === "contact" ? "success.main" : "text.primary",
                  }}
                  href="/contact"
                >
                  Contact
                  <Stack className="hover-box" component="span" flexDirection="row" alignItems="center">
                    <Box
                      className="hover-divider"
                      display="inline-block"
                      component="span"
                      sx={{
                        height: "1px",
                        backgroundColor: "success.main",
                        transition: "width 0.4s ease-in-out",
                        width: "0",
                      }}
                    />
                    <Box
                      component="span"
                      className="hover-dot"
                      sx={{
                        height: ".35rem",
                        width: ".35rem",
                        backgroundColor: "success.main",
                        borderRadius: "100%",
                        opacity: 0,
                      }}
                    />
                  </Stack>
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
