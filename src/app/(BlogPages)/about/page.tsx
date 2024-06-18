"use client";
import React from "react";
import Image from "next/image";

import { Box, Container, Grid, Typography } from "@mui/material";

import AboutDetails from "@/widgets/AboutDetails";
import MyService from "@/widgets/MyService";
import MyTestmonials from "@/widgets/MyTestmonials";
import aboutImag from "../../../../public/about.png";

const About = () => {
  return (
    <Box py={{ md: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6, lg: 10 }}>
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
              <Image src={aboutImag} alt="about" height={517} width={430} />
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
