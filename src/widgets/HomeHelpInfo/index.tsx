import { Box, IconButton, Link, Stack, Typography } from "@mui/material";

import { FC } from "react";

import MailIcon from "@mui/icons-material/Mail";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";

import { HomeHelpInfoProps } from "./Types";

const HomeHelpInfo: FC<HomeHelpInfoProps> = () => {
  return (
    <Stack
      py={{ xs: 3, md: 5, lg: 15 }}
      justifyContent="space-between"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h3">Want to hire me?</Typography>
      <Stack flexDirection="column" alignItems="center">
        <Typography variant="subtitle1" color="text.secondary">
          I strive to reply within an hour.
        </Typography>
        <Stack flexDirection="row" gap={1.5} p={2} alignItems="center">
          <IconButton color="success">
            <MailIcon />
          </IconButton>
          <Typography variant="overline">EMAIL</Typography>
        </Stack>
      </Stack>
      <Stack
        px={2}
        justifyContent="center"
        alignItems="center"
        gap={2}
        flexDirection="row"
      >
        <Box
          sx={(theme) => ({
            bgcolor: theme.palette.text.disabled,
          })}
          height={{ xs: 2 }}
          width={{ xs: 171, lg: 120, xl: 171 }}
        ></Box>
        <Typography variant="h5" color="text.secondary">
          or
        </Typography>
        <Box
          height={{ xs: 2 }}
          width={{ xs: 171, lg: 120, xl: 171 }}
          sx={(theme) => ({
            bgcolor: theme.palette.text.disabled,
          })}
        ></Box>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        gap={0.5}
      >
        <IconButton
          component={Link}
          href="https://www.facebook.com/petedilam.ridoydani"
          sx={(theme) => ({
            boxShadow: 25,
          })}
        >
          <FacebookRoundedIcon color="info" sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton
          component={Link}
          href="#"
          sx={(theme) => ({
            boxShadow: 25,
          })}
        >
          <AddCircleOutlineRoundedIcon color="info" sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton
          component={Link}
          href="#"
          sx={(theme) => ({
            boxShadow: 25,
          })}
        >
          <CloudUploadRoundedIcon color="info" sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.youtube.com/"
          sx={(theme) => ({
            boxShadow: 25,
          })}
        >
          <SubscriptionsRoundedIcon color="info" sx={{ fontSize: 40 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default HomeHelpInfo;
