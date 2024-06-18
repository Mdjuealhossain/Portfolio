import { FC } from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";

import { WorkDetailsProps } from "./Types";

const WorkDetails: FC<WorkDetailsProps> = () => {
  return (
    <Stack flexDirection="column" alignItems="center">
      <Typography variant="h3">My experience so far</Typography>
      <Stack
        height="100%"
        px={2}
        pt={2}
        flexDirection="column"
        justifyItems="center"
        alignItems="flex-start"
        width="100%"
      >
        <Stack p={1} flexDirection="column" gap={1} width="100%">
          <Box>
            <Typography pl={0.5} variant="h4" display="inline-block">
              Theme Master
            </Typography>
            <Typography display="inline">( 2 yr 3 mos)</Typography>
          </Box>
          <Stack
            px={2}
            py={1.5}
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap={1.5}
            width="100%"
          >
            <Stack
              bgcolor="background.paper"
              px={2}
              py={1}
              flexDirection="column"
              gap={1}
              width="100%"
            >
              <Typography variant="h5">Senior .FONT Developer</Typography>
              <Typography variant="caption">
                MAY 2023 - PRESENT (8 months)
              </Typography>
              <Typography variant="caption" sx={{ fontSize: 16 }}>
                Develops and maintains services handling business logic.
                <Box component="br"></Box>Created both desktop and web
                applications for internal use by the company
              </Typography>
            </Stack>

            <Paper elevation={25}>
              <Stack width="100%" px={2} py={1}>
                <Typography variant="h5">Fontend Software Developer</Typography>
              </Stack>
            </Paper>
          </Stack>
        </Stack>
        <Box>
          <Typography variant="h4" display="inline">
            Freelancer
          </Typography>
          <Typography display="inline">(2 year)</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default WorkDetails;
