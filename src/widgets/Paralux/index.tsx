"use client";
import React from "react";
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import type { Engine } from "tsparticles-engine";

export default function Paralux() {
  const theme = useTheme();

  const particleOptions = {
    preset: "stars",
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 400,
      },
      color: {
        value: theme.palette.success.main,
      },

      move: {
        speed: 6,
      },
    },
  };

  const customInit = async (engine: Engine) => {
    const test = await loadStarsPreset(engine);
    return test;
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Particles options={particleOptions} init={customInit} />
      </Box>
    </>
  );
}
