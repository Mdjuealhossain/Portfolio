import { FC, useState } from "react";

import { Stack, Typography, Box, Divider, Grid, Button, Hidden } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { AboutDetailsProps } from "./Types";

const AboutDetails: FC<AboutDetailsProps> = () => {
  const [showMore, setShomore] = useState(false);

  return (
    <Stack flexDirection="column" gap={{ md: 1.25 }}>
      <Box>
        <Typography variant="h6" color="success.main" textAlign={{ xs: "center", md: "start" }} pb={2}>
          Who am i?
        </Typography>
        <Typography variant="h4" pb={2} textAlign={{ xs: "center", md: "start" }} fontWeight={700}>
          I'm Md. Jueal, a Frontend Developer
        </Typography>
        <Hidden mdDown>
          <Typography color="text.secondary">{description}</Typography>
        </Hidden>
        <Hidden mdUp>
          <Stack onClick={() => setShomore(!showMore)}>
            <Typography color="text.secondary">
              {showMore ? description : `${description.substring(0, 209)}`}
              <Box component="span" color="inherit">
                {!showMore && (
                  <Typography component="span" variant="subtitle2">
                    ...see more
                  </Typography>
                )}
              </Box>
            </Typography>
          </Stack>
        </Hidden>
      </Box>
      <Box py={3}>
        <Divider />
      </Box>
      <Grid container spacing={2} pb={3}>
        <Grid xs={12} md={6} item display="flex" alignItems="center" gap={1}>
          <Typography>Name:</Typography>
          <Typography color="text.secondary">Mohammod Jueal</Typography>
        </Grid>
        <Grid xs={12} md={6} item display="flex" alignItems="center" gap={1}>
          <Typography>Email:</Typography>
          <Typography color="success.main">mdjueal920977@gmail.com</Typography>
        </Grid>
        <Grid xs={12} md={6} item display="flex" alignItems="center" gap={1}>
          <Typography>Age:</Typography>
          <Typography color="text.secondary">22</Typography>
        </Grid>
        <Grid xs={12} md={6} item display="flex" alignItems="center" gap={1}>
          <Typography>From:</Typography>
          <Typography color="text.secondary">Dhaka, Bangladesh</Typography>
        </Grid>
      </Grid>
      <Stack gap={3} flexDirection={{ xs: "column-reverse", md: "row" }} alignItems="center">
        <Button variant="contained" color="success" sx={{ borderRadius: 30 }}>
          Download CV
        </Button>
        <Hidden mdDown>
          <Box maxWidth={60} width="100%">
            <Divider />
          </Box>
        </Hidden>

        <Stack flexDirection="row" gap={1}>
          <GitHubIcon sx={{ fontSize: 21 }} />
          <FacebookRoundedIcon sx={{ fontSize: 21 }} />
          <TwitterIcon sx={{ fontSize: 21 }} />
          <LinkedInIcon sx={{ fontSize: 21 }} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutDetails;

const description =
  "A seasoned team of designers and developers with over 2+ years of expertise, proficient in HTML, CSS, React, Next, Storybook, Tailwind,MUI, Bootstrap, Firebase, MongoDB, and Node. We have successfully transformed over 150 Figma designs into captivating websites. Our passion drives our dedication to delivering outstanding results. We respect your time and look forward to collaborating on something extraordinary. Have a phenomenal day! ";
