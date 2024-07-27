"use client";
import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";

import ImageCard from "@/components/ImageCard";
import Transition from "@/components/Transition";
import { AllData, brandData, designData, photsData } from "@/data";

const Portfolio = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Transition>
      <Stack py={5}>
        <Container maxWidth="lg">
          <Box mb={{ xs: 6, md: 10 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              pb={2}
            >
              Showcasing some of my best work
            </Typography>
            <Typography variant="h2" textAlign="center">
              Portfolio
            </Typography>
          </Box>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Stack justifyContent="center" alignItems="center">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="1" label={<Typography>All</Typography>} />
                  <Tab value="2" label={<Typography>Brand</Typography>} />
                  <Tab value="3" label={<Typography>Design</Typography>} />
                  <Tab value="4" label={<Typography>Photos</Typography>} />
                </Tabs>
              </Stack>
              <TabPanel value="1" sx={{ p: 0, pt: 3 }}>
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  {AllData.map((data) => {
                    return (
                      <Grid item xs={6} lg={4} key={data.id}>
                        <ImageCard img={data.img} title={data.title} />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
              <TabPanel value="2" sx={{ p: 0, pt: 3 }}>
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  {brandData.map((data) => {
                    return (
                      <Grid item xs={6} lg={4} key={data.id}>
                        <ImageCard img={data.img} title={data.title} />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
              <TabPanel value="3" sx={{ p: 0, pt: 3 }}>
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  {designData.map((data) => {
                    return (
                      <Grid item xs={6} lg={4} key={data.id}>
                        <ImageCard img={data.img} title={data.title} />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
              <TabPanel value="4" sx={{ p: 0, pt: 3 }}>
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  {photsData.map((data) => {
                    return (
                      <Grid item xs={6} lg={4} key={data.id}>
                        <ImageCard img={data.img} title={data.title} />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </Stack>
    </Transition>
  );
};

export default Portfolio;
