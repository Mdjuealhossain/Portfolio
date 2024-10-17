"use client";
import { FC } from "react";

import { TourProps } from "./Types";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Objerb from "@/components/Objerb";

const Tour: FC<TourProps> = () => {
  return (
    <Objerb id="oficial-tour">
      <Grid container spacing={3} flexDirection={{ xs: "column-reverse", md: "row" }}>
        <Grid item xs={12} md={6} gap={2} display="flex" flexDirection="column">
          <Typography variant="h4" fontWeight={600}>
            Take a tour of my office
          </Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita. Voluptatem tempore, aspernatur rem facilis,
            distinctio nemo! Odio velit, nemo dolorem voluptas!
          </Typography>
          <Typography color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui aspernatur unde mollitia, in laborum.</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          component="video"
          controls
          sx={{
            width: "100%",
            height: "auto",
          }}
        >
          <source src="/public/static/video/videoplayback (1).mp4" type="video/mp4" />
        </Grid>
      </Grid>
    </Objerb>
  );
};

export default Tour;
