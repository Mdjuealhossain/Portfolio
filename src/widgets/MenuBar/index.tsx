import { FC, useState } from "react";
import Image from "next/image";

import { Box, Stack, Typography, Grid, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

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
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <MenuIcon sx={{ ml: 2 }} onClick={handleOpen} />
      <Drawer open={open} onClose={handleOpen} elevation={0}>
        <Stack
          sx={(theme) => ({
            bgcolor: theme.palette.background.paper,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative",
            justifyContent: "space-between",
          })}
        >
          <Box
            textAlign="center"
            position="absolute"
            onClick={handleClose}
            top={8}
            left="47%"
          >
            <CloseIcon
              sx={(theme) => ({
                bgcolor: theme.palette.grey[700],
                borderRadius: "100%",
              })}
            />
          </Box>
          <Grid
            container
            spacing={4}
            sx={{ px: 2, pt: 10 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={0.5}
              component={Link}
              onClick={handleClose}
              href="/about"
            >
              <Image src={about} alt="resume" height={40} width={40} />
              <Typography color="text.primary">About</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={0.5}
              component={Link}
              onClick={handleClose}
              href="/resume"
            >
              <Image src={resume} alt="resume" height={40} width={40} />
              <Typography color="text.primary">Resume</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={0.5}
              component={Link}
              onClick={handleClose}
              href="/portfolio"
            >
              <Image src={portfolio} alt="resume" height={40} width={40} />
              <Typography color="text.primary">Portfolio</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={0.5}
              component={Link}
              onClick={handleClose}
              href="/blog"
            >
              <Image src={blog} alt="resume" height={40} width={40} />
              <Typography color="text.primary">Blog</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={0.5}
              component={Link}
              onClick={handleClose}
              href="/contact"
            >
              <Image src={contact} alt="resume" height={40} width={40} />
              <Typography color="text.primary">Contact</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={0.5}
              component={Link}
              onClick={handleClose}
              href="https://www.linkedin.com/in/md-jueal-hossain-2386aa291/"
            >
              <Image src={linkedin} alt="resume" height={40} width={40} />
              <Typography color="text.primary">LinkedIn</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={0.5}
              component={Link}
              onClick={handleClose}
              href="https://github.com/Mdjuealhossain"
            >
              <Image src={github} alt="resume" height={40} width={40} />
              <Typography color="text.primary">Github</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={0.5}
              component={Link}
              onClick={handleClose}
              href="https://www.freelancer.com.bd/u/jueal14"
            >
              <Image src={freelancer} alt="resume" height={40} width={40} />
              <Typography color="text.primary">Freelancer</Typography>
            </Grid>
          </Grid>
          <Stack
            pb={2}
            flexDirection="row"
            justifyContent="space-around
          "
          >
            <Link
              onClick={handleClose}
              color="text.primary"
              href="/"
              variant="caption"
            >
              Go Home
            </Link>
            <Typography onClick={handleClose} variant="caption">
              Portfolio 2024
            </Typography>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};

export default MenuBar;
