"use client";
import { useState, useEffect } from "react";
import { Box, Stack, Typography, Hidden } from "@mui/material";

export default function Home() {
  const [content, setContent] = useState("I'm a Developer");
  const [img, setImg] = useState(
    "https://as2.ftcdn.net/v2/jpg/02/10/13/99/1000_F_210139964_Pl4gotUIs4RU8uzFLI7oShGLhPGg2OOH.jpg"
  );
  const [animate, setAnimate] = useState(false);
  const texts = ["I'm a Developer", "I'm a Designer", "I'm a Freelancer"];
  const imges = [
    "https://as2.ftcdn.net/v2/jpg/02/10/13/99/1000_F_210139964_Pl4gotUIs4RU8uzFLI7oShGLhPGg2OOH.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-abstract-3d-design-featuring-red-and-black-geometric-shapes-image_3640129.jpg",
    "https://img.freepik.com/premium-photo/graphic-design-photographer-workspace-flat-lay-top-view-with-office-supplies-copy-space-black-background-soho-freelancer-lifestyle-concept_146508-569.jpg?w=1060",
  ];

  useEffect(() => {
    let indexText = 0;
    let indexImg = 0;
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setImg(imges[indexImg]);
        setContent(texts[indexText]);
        setAnimate(false);
        indexText = (indexText + 1) % texts.length;
        indexImg = (indexImg + 1) % imges.length;
      }, 500); // Match the duration of the animation
    }, 2000); // Update every 2 seconds

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
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { xs: "calc(100vh - 48px)", md: "calc(100vh - 64px)" },
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        height="100%"
        px={2}
        bgcolor="rgba(0,0,0,.6)"
      >
        <Hidden mdDown>
          <Typography variant="h1" mb={4.5}>
            Mohammod Jueal
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="h1">Md Jueal</Typography>
        </Hidden>
        <Box sx={animate ? slideInRightStyles : {}}>
          <Typography variant="h4">{content}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
