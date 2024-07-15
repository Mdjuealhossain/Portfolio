"use client";
import { FC } from "react";
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import type { Engine } from "tsparticles-engine";
import { ParaluxProps } from "./Types";

const Paralux: FC<ParaluxProps> = ({ particles }) => {
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
        value: particles,
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
};

export default Paralux;
