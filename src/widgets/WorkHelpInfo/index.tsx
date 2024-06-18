import { FC } from "react";
import { Box, IconButton, Stack, Typography, Link } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";

import { WorkHelpInfoProps } from "./Types";

const WorkHelpInfo: FC<WorkHelpInfoProps> = () => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      height="100%"
    >
      <Typography variant="h3">Want to hire me?</Typography>

      <Typography
        variant="subtitle1"
        sx={(theme) => ({
          color: theme.palette.text.secondary,
        })}
      >
        I strive to reply within an hour.
      </Typography>
      <Stack
        flexDirection="row"
        gap={1.25}
        p={2}
        alignItems="center"
        height={62}
      >
        <MailIcon
          sx={(theme) => ({
            height: 30,
            width: 30,
            color: theme.palette.success.light,
          })}
        />
        <Typography variant="overline">EMAIL</Typography>
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
        gap={2}
      >
        <IconButton
          component={Link}
          href="#"
          sx={(theme) => ({
            boxShadow: 25,
          })}
        >
          <FacebookRoundedIcon sx={{ height: 40, width: 40 }} />
        </IconButton>
        <IconButton
          component={Link}
          href="#"
          sx={(theme) => ({
            boxShadow: 25,
          })}
        >
          <AddCircleOutlineRoundedIcon sx={{ height: 40, width: 40 }} />
        </IconButton>
        <IconButton
          component={Link}
          href="#"
          sx={(theme) => ({
            boxShadow: 25,
          })}
        >
          <CloudUploadRoundedIcon sx={{ height: 40, width: 40 }} />
        </IconButton>
        <IconButton
          component={Link}
          href="#"
          sx={(theme) => ({
            boxShadow: 25,
          })}
        >
          <SubscriptionsRoundedIcon sx={{ height: 40, width: 40 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default WorkHelpInfo;
