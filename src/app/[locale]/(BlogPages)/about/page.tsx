"use client";
import React from "react";
import Image from "next/image";
import { Avatar, Box, Container, Grid, Hidden, Stack, Typography } from "@mui/material";

import AboutDetails from "@/widgets/AboutDetails";
import MyService from "@/widgets/MyService";
import MyTestmonials from "@/widgets/MyTestmonials";

const About = () => {
  return (
    <Box py={5}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, lg: 10 }}>
          <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="body2" color="text.secondary" pb={2}>
              Get to know me
            </Typography>
            <Typography variant="h2">About Me</Typography>
          </Grid>
          <Grid container item xs={12} spacing={4}>
            <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
              <Image src={"/assets/images/about/file.webp"} alt="about" layout="responsive" height={417} width={570} />
            </Grid>
            <Grid item xs={12} md={6}>
              <AboutDetails />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box mt={{ xs: 6, lg: 10 }}>
        <MyTestmonials />
      </Box>
      <Container maxWidth="lg">
        <Box mt={{ xs: 6, lg: 10 }}>
          <MyService />
        </Box>
      </Container>
    </Box>
  );
};

export default About;
