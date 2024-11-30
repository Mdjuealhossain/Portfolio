"use client";
import { FC, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Box, Stack, Typography, Hidden, CardMedia, Button } from "@mui/material";

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
          <Typography variant="h4" textAlign="center">
            {content}
          </Typography>
        </Box>

        <Stack position="absolute" top="68%" left={0} right={0}>
          <Marquee speed={50} pauseOnHover={true} autoFill>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/html.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/css.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/js.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/ts.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/react.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/next.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  bgcolor: "common.white",
                  borderRadius: "100%",
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/redux.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/rs.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/farmer.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/tailwind.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/mui.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/bootstrap.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/figma.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/xd.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/canva.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
            <Box mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
              <Box
                component="img"
                src="/assets/icons/skills/sb.svg"
                alt="figma"
                height={{ xs: 35, md: 50 }}
                width={{ xs: 35, md: 50 }}
                sx={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.2s ease-in-out",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />
            </Box>
          </Marquee>
          <Stack justifyContent="center" alignItems="center" mt={{ xs: 2.4, md: 6 }}>
            <a href="/document/jueal(Developer)...pdf (1) (1).pdf" download="Md. Jueal.pdf">
              <Button
                variant="contained"
                sx={(theme) => ({ borderRadius: 30, background: `linear-gradient(-45deg, ${theme.palette.success.main}, ${theme.palette.secondary.dark},${theme.palette.success.main})` })}
              >
                Download CV
              </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </CardMedia>
  );
};

export default HeroBanner;
