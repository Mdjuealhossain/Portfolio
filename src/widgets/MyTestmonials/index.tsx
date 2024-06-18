import React from "react";

import { Grid, Stack, Typography } from "@mui/material";

import Testmonial from "@/components/Testmonial";

const MyTestmonials = () => {
  return (
    <Stack>
      <Typography
        variant="body2"
        color="text.secondary"
        pb={2}
        textAlign={{ xs: "center", md: "start" }}
      >
        What my clients think about me
      </Typography>
      <Typography
        variant="h3"
        pb={{ xs: 3, md: 6 }}
        textAlign={{ xs: "center", md: "start" }}
      >
        Testimonials
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Testmonial
            title="Mohammad A."
            image="https://cdn5.f-cdn.com/ppic/57478450/logo/7396874/profile_logo_7396874.jpg?image-optimizer=force&format=webply&width=120"
            description="Mohammod Jueal is an exceptionally skilled front-end developer with expertise in HTML, CSS, JavaScript, and modern frameworks. Their meticulous attention to detail, innovative problem-solving, and strong collaboration make them a valuable asset to any team. Reliable and consistently delivering high-quality work on time, Jueal is committed to continuous learning and innovation. Highly recommended!"
            subtitle="Project Maneger at AlphaSaaS"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Testmonial
            title="Sabbir Ahmed"
            image="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/375058363_1785646171855309_1476193012938187004_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEIQ3AU-U0szQig5BjNXSSmIEu7ZAitcU0gS7tkCK1xTZ7wRaL_TjQCr6b5X2m914pLNHro9ZmCtHERpTytDuC6&_nc_ohc=hd78_BxZ964Q7kNvgGrOWUi&_nc_ht=scontent.fdac24-3.fna&oh=00_AYA4asZGiHuY6vjNcE66CkoUemSxetDHFF2I0qmqGOQBYg&oe=6673BF81"
            description="Mohammod Jueal is a highly skilled front-end developer who has significantly enhanced our B2C marketplace. His expertise in HTML, CSS, and JavaScript, combined with meticulous attention to detail and excellent teamwork, makes him an invaluable asset. He consistently delivers high-quality work on time and is always eager to innovate. His contributions have greatly improved. Highly recommended!"
            subtitle="Project Maneger at B2C"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default MyTestmonials;
