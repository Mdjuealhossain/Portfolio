"use client";
import {
  Box,
  Grid,
  Container,
  Stack,
  Typography,
  CardMedia,
} from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${"../../public/banner.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "calc(100vh - 64px)",
      }}
    >
      <Stack justifyContent="center" alignItems="center" height="100%">
        <Typography variant="h1" mb={4.5}>
          Mohammod Jueal
        </Typography>
        <Typography variant="h4">I'm a Developer</Typography>
      </Stack>
    </Box>
  );
}
