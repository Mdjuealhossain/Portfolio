import React, { FC, useState } from "react";
import { ImageCardProps } from "./Types";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ImageCard: FC<ImageCardProps> = ({ img, title }) => {
  const [open, setOpen] = useState(false);
  const handleEnter = () => {
    setOpen((prev) => !prev);
  };
  const handleExit = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Box
      position="relative"
      onMouseOver={() => handleEnter()}
      onMouseOut={() => handleExit()}

      //   sx={{ transform: `scale(1.8)` }}
    >
      <Box height={{ xs: 168, md: 395 }}>
        <Image src={img} alt="all" layout="responsive" />
      </Box>
      <Stack
        position="absolute"
        bgcolor="rgba(0,0,0,0.8)"
        top={0}
        right={0}
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        sx={{ opacity: open === true ? 1 : 0, transition: "all .2s" }}
      >
        <Typography color="common.white" mb={1.25}>
          {title}
        </Typography>
        <Typography color="success.main">More Info</Typography>
      </Stack>
    </Box>
  );
};

export default ImageCard;
