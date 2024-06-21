"use client";
import React from "react";
import Image from "next/image";

import {
  Avatar,
  Box,
  Container,
  Grid,
  Hidden,
  Stack,
  Typography,
} from "@mui/material";

import AboutDetails from "@/widgets/AboutDetails";
import MyService from "@/widgets/MyService";
import MyTestmonials from "@/widgets/MyTestmonials";
import aboutImag from "../../../../public/static/images/IMG_20240221_154711.jpg";

const About = () => {
  return (
    <Box py={{ xs: 8, md: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 10, md: 6, lg: 10 }}>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="body2" color="text.secondary" pb={2}>
              Get to know me
            </Typography>
            <Typography variant="h2">About Me</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12} md={6}>
              <Hidden mdDown implementation="css">
                <Image src={aboutImag} alt="about" height={517} width={430} />
              </Hidden>
              <Hidden mdUp implementation="css">
                <Stack justifyContent="center" alignItems="center" pb={4}>
                  <Avatar
                    src="https://cdn5.f-cdn.com/ppic/244026572/logo/74430235/yISKG/CROPPED_profile_logo_VGFCW_16ada05214aa9a815c6159c4ab557994.jpeg?image-optimizer=force&format=webply&width=336"
                    alt="img"
                    sx={{ width: 176, height: 176 }}
                  />
                </Stack>
              </Hidden>
            </Grid>
            <Grid item xs={12} md={6}>
              <AboutDetails />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MyService />
          </Grid>
          <Grid item xs={12}>
            <MyTestmonials />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
