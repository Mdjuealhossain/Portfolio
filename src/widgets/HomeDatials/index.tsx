import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { HomeDetailsProps } from "./Types";

const HomeDetails: FC<HomeDetailsProps> = () => {
  return (
    <Stack sx={{ py: 15 }} justifyContent="space-between" height="100%">
      <Stack flexDirection="column" pb={3.6} gap={1.25} alignItems="flex-start">
        <Box>
          <Typography variant="h3" display="inline">
            Hi, I'm {""}
          </Typography>
          <Typography
            display="inline"
            variant="h3"
            sx={(theme) => ({ color: theme.palette.success.main })}
          >
            Mohammod Jueal
          </Typography>
        </Box>
        <Typography variant="h5" color="text.secondary">
          Welcome to my page
        </Typography>
      </Stack>

      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        gap={2}
        height="100%"
      >
        <Stack flexDirection="column">
          <Stack flexDirection="row" alignItems="center">
            <Typography sx={{ display: "inline-block", pr: 1 }} variant="body2">
              I’m a{" "}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.success.main,
              })}
            >
              Junior Fontend Developer
            </Typography>
          </Stack>

          <Typography variant="body2">
            specialising in web and mobile apps.
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body2">
            In my free time, I am either contributing to Open-Source projects or
            working on my cars.
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body2">
            I love talking about the world, hobbies and especially code.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomeDetails;
