import { FC, useState } from "react";
import Image from "next/image";

import {
  Box,
  Stack,
  Typography,
  Grid,
  Link,
  MenuItem,
  Menu,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";

import resume from "../../../public/Assesr/Svg/resume.svg";
import about from "../../../public/Assesr/Svg/about.svg";
import portfolio from "../../../public/Assesr/Svg/portfolio.svg";
import blog from "../../../public/Assesr/Svg/blog.svg";
import contact from "../../../public/Assesr/Svg/contact.svg";
import linkedin from "../../../public/Assesr/Svg/linkedin.svg";
import github from "../../../public/Assesr/Svg/github.svg";
import freelancer from "../../../public/Assesr/Svg/freelancer.svg";

import { MenuBarProps } from "./Types";

const MenuBar: FC<MenuBarProps> = ({ onClose }) => {
  const [anchorElAvat, setAnchorElAvat] = useState<HTMLElement | null>(null);
  const handleOpenNavAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAvat(event.currentTarget);
  };

  const handleCloseNavAvatar = () => {
    setAnchorElAvat(null);
  };
  // const theme = useTheme();

  return (
    <>
      <IconButton onClick={handleOpenNavAvatar}>
        <MenuIcon
          sx={(theme) => ({
            ml: 2,
            color:
              theme.palette.mode === "dark"
                ? theme.palette.common.white
                : theme.palette.common.black,
          })}
        />
      </IconButton>
      <Menu
        sx={(theme) => ({
          right: -16,
          left: -16,
          // backdropFilter: "blur(2px)",
          background: "transparent",
          top: -17,
          p: 0,
          "& .MuiMenu-paper": {
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
            boxShadow: 5,
          },
        })}
        id="menu-appbar"
        anchorEl={anchorElAvat}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElAvat)}
        onClose={handleCloseNavAvatar}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          borderRadius={3}
          p={2}
          mt={8}
          mb={4}
          bgcolor="background.paper"
          mx={2}
        >
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <MenuItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={0.5}
                component={Link}
                onClick={handleCloseNavAvatar}
                href="/about"
              >
                <Image src={about} alt="resume" height={32} width={32} />
                <Typography color="text.primary" variant="caption">
                  About
                </Typography>
              </MenuItem>
            </Grid>

            <Grid item xs={4}>
              <MenuItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={0.5}
                component={Link}
                onClick={handleCloseNavAvatar}
                href="/resume"
              >
                <Image src={resume} alt="resume" height={32} width={32} />
                <Typography color="text.primary" variant="caption">
                  Resume
                </Typography>
              </MenuItem>
            </Grid>
            <Grid item xs={4}>
              <MenuItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={0.5}
                component={Link}
                onClick={handleCloseNavAvatar}
                href="/portfolio"
              >
                <Image src={portfolio} alt="resume" height={32} width={32} />
                <Typography color="text.primary" variant="caption">
                  Portfolio
                </Typography>
              </MenuItem>
            </Grid>
            <Grid item xs={4}>
              <MenuItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={0.5}
                component={Link}
                onClick={handleCloseNavAvatar}
                href="/blog"
              >
                <Image src={blog} alt="resume" height={32} width={32} />
                <Typography color="text.primary" variant="caption">
                  Blog
                </Typography>
              </MenuItem>
            </Grid>
            <Grid item xs={4}>
              <MenuItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={0.5}
                component={Link}
                onClick={handleCloseNavAvatar}
                href="/contact"
              >
                <Image src={contact} alt="resume" height={32} width={32} />
                <Typography color="text.primary" variant="caption">
                  Contact
                </Typography>
              </MenuItem>
            </Grid>
            <Grid item xs={4}>
              <MenuItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={0.5}
                component={Link}
                onClick={handleCloseNavAvatar}
                href="https://www.linkedin.com/in/md-jueal-hossain-2386aa291/"
              >
                <Image src={linkedin} alt="resume" height={32} width={32} />
                <Typography color="text.primary" variant="caption">
                  LinkedIn
                </Typography>
              </MenuItem>
            </Grid>
            <Grid item xs={4}>
              <MenuItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={0.5}
                component={Link}
                onClick={handleCloseNavAvatar}
                href="https://github.com/Mdjuealhossain"
              >
                <Image src={github} alt="resume" height={32} width={32} />
                <Typography color="text.primary" variant="caption">
                  Github
                </Typography>
              </MenuItem>
            </Grid>
            <Grid item xs={4}>
              <MenuItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={0.5}
                component={Link}
                onClick={handleCloseNavAvatar}
                href="https://www.freelancer.com.bd/u/jueal14"
              >
                <Image src={freelancer} alt="resume" height={32} width={32} />
                <Typography color="text.primary" variant="caption">
                  Freelancer
                </Typography>
              </MenuItem>
            </Grid>
          </Grid>
        </Stack>
        <Stack
          pb={1}
          flexDirection="row"
          justifyContent="space-around
          "
        >
          <Link
            onClick={handleCloseNavAvatar}
            color="text.primary"
            variant="caption"
            href="/"
          >
            Go Home
          </Link>
          <IconButton
            onClick={handleCloseNavAvatar}
            sx={(theme) => ({
              borderRadius: "100%",
            })}
            size="large"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <Typography onClick={handleCloseNavAvatar} variant="caption">
            Portfolio 2024
          </Typography>
        </Stack>
      </Menu>
    </>
  );
};

export default MenuBar;
