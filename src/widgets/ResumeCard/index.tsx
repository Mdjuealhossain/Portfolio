"use client";
import { FC } from "react";
import { Box, Button, Card, Paper, Stack, Typography } from "@mui/material";

import { ResumeCardProps } from "./Types";

const ResumeCard: FC<ResumeCardProps> = ({ passyr, depertment, school, description }) => {
  return (
    <Card
      elevation={2}
      sx={(theme) => ({
        boxShadow: theme.shadows[13],
        ":hover": {
          transform: "translateY(-15px)",
          boxShadow: theme.shadows[24],
          transition: "all .7s",
        },
      })}
    >
      <Stack gap={2} p={4}>
        <Box>
          <Button variant="contained" size="small" color="success">
            {passyr}
          </Button>
        </Box>

        <Box>
          <Typography variant="subtitle1">{depertment}</Typography>
          <Typography color="text.secondary" variant="caption">
            {school}
          </Typography>
        </Box>
        <Typography>{description}</Typography>
      </Stack>
    </Card>
  );
};

export default ResumeCard;
