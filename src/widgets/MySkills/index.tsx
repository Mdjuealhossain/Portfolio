"use client";
import { FC } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Grid, Stack, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { MySkillsProps } from "./Types";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.success.main,
  },
}));

const MySkills: FC<MySkillsProps> = () => {
  return (
    <Box pb={10}>
      <Grid container columnSpacing={6}>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={{ xs: "center", md: "start" }}
            pb={2}
          >
            My level of knowledge in some tools
          </Typography>
          <Typography
            variant="h3"
            pb={6}
            textAlign={{ xs: "center", md: "start" }}
          >
            My Skills
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack gap={4}>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Web Design</Typography>
                  <Typography>95%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={95} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>JavaScript</Typography>
                  <Typography>75%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={75} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>HTML</Typography>
                  <Typography>95%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={95} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>CSS</Typography>
                  <Typography>95%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={95} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Next Js</Typography>
                  <Typography>80%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={80} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Redux</Typography>
                  <Typography>80%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={80} />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack gap={4}>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>React Js</Typography>
                  <Typography>85%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={85} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Boostrap</Typography>
                  <Typography>90%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={90} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Tailwind CSS</Typography>
                  <Typography>95%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={95} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Style Component</Typography>
                  <Typography>80%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={80} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>Meterial UI</Typography>
                  <Typography>95%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={95} />
              </Stack>
            </Stack>
            <Stack>
              <Stack gap={1}>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography>TypeScript</Typography>
                  <Typography>85%</Typography>
                </Stack>
                <BorderLinearProgress variant="determinate" value={85} />
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MySkills;
