"use client";
import { FC, useState, useEffect } from "react";
import { Box, Stack, Typography, Hidden, CardMedia } from "@mui/material";

import Paralux from "@/widgets/Paralux";
import { imges } from "@/data";

import { HeroBannerProps } from "./Types";

const HeroBanner: FC<HeroBannerProps> = ({ name, dev, free, des }) => {
  const [content, setContent] = useState(dev);
  const [img, setImg] = useState(imges[0]);
  const [animate, setAnimate] = useState(false);
  const prof1 = [dev, des, free];

  useEffect(() => {
    let indexText = 0;
    let indexImg = 0;
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setImg(imges[indexImg]);
        setContent(prof1[indexText]);
        setAnimate(false);
        indexText = (indexText + 1) % prof1.length;
        indexImg = (indexImg + 1) % imges.length;
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slideInRightStyles = {
    position: "relative",
    animation: "slideInRight 0.5s forwards",
    "@keyframes slideInRight": {
      from: {
        transform: "translateX(30%)",
        opacity: 0,
      },
      to: {
        transform: "translateX(0)",
        opacity: 1,
      },
    },
  };

  return (
    <CardMedia
      image={img}
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { xs: "calc(100vh - 128px)", md: "calc(100vh - 64px)" },
      }}
    >
      <Stack justifyContent="center" alignItems="center" height="100%" px={2} bgcolor={(theme) => (theme.palette.mode === "dark" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.4)")}>
        <Hidden mdDown>
          <Typography
            variant="h1"
            mb={4.5}
            sx={(theme) => ({
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.secondary.dark},${theme.palette.success.main})`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            {name}
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography
            variant="h1"
            sx={(theme) => ({
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.secondary.dark},${theme.palette.success.main})`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            Md. Jueal
          </Typography>
        </Hidden>
        <Box sx={animate ? slideInRightStyles : {}}>
          <Typography variant="h4">{content}</Typography>
        </Box>
      </Stack>
    </CardMedia>
  );
};

export default HeroBanner;
