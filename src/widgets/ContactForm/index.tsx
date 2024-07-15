"use client";
import React from "react";
import Image from "next/image";

import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import name from "../../../public/Assesr/Svg/name.svg";
import location from "../../../public/Assesr/Svg/location.svg";
import call from "../../../public/Assesr/Svg/call.svg";
import email from "../../../public/Assesr/Svg/email.svg";

const ContactForm = () => {
  return (
    <Grid
      container
      spacing={{ md: 3 }}
      bgcolor={{ md: "background.paper" }}
      borderRadius={3}
      boxShadow={25}
    >
      <Grid
        bgcolor={{ xs: "background.paper" }}
        borderRadius={3}
        item
        xs={12}
        md={7}
        display="flex"
        flexDirection="column"
        gap={3}
        p={3}
      >
        <Typography variant="h6">Message Me</Typography>
        <Stack flexDirection={{ md: "row" }} gap={3}>
          <TextField fullWidth variant="filled" placeholder="Name" />
          <TextField fullWidth variant="filled" placeholder="Email" />
        </Stack>
        <TextField variant="filled" fullWidth placeholder="Subject" />
        <TextField
          rows={4}
          variant="filled"
          fullWidth
          placeholder="Message"
          multiline
        />
        <Box>
          <Button variant="contained" color="success" sx={{ borderRadius: 30 }}>
            Send Message
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        bgcolor={{ xs: "background.paper" }}
        borderRadius={3}
        p={3}
        mt={{ xs: 3, md: 0 }}
      >
        <Typography mb={4} variant="h6">
          Contact Info
        </Typography>
        <Typography mb={4} color="text.secondary">
          Always available for freelance work if the right project comes along,
          Feel free to contact me!
        </Typography>
        <Box>
          <Stack flexDirection="row" gap={3}>
            <Image src={name} alt="img" height={36} width={29} />
            <Box>
              <Divider
                orientation="vertical"
                variant="fullWidth"
                sx={{ borderRightWidth: "2px" }}
              />
            </Box>
            <Box pb={2}>
              <Typography fontWeight={600}>Name</Typography>
              <Typography variant="caption" color="text.secondary">
                Mohammod Jueal
              </Typography>
            </Box>
          </Stack>
          <Stack flexDirection="row" gap={3}>
            <Image src={location} alt="img" height={36} width={29} />
            <Box>
              <Divider
                orientation="vertical"
                variant="fullWidth"
                sx={{ borderRightWidth: "2px" }}
              />
            </Box>
            <Box pb={2}>
              <Typography fontWeight={600}>Location</Typography>
              <Typography variant="caption" color="text.secondary">
                Akrain, Birulia, Savar, Dhaka
              </Typography>
            </Box>
          </Stack>
          <Stack flexDirection="row" gap={3}>
            <Image src={call} alt="img" height={36} width={29} />
            <Box>
              <Divider
                orientation="vertical"
                variant="fullWidth"
                sx={{ borderRightWidth: "2px" }}
              />
            </Box>
            <Box pb={2}>
              <Typography fontWeight={600}>Call Me</Typography>
              <Typography variant="caption" color="text.secondary">
                +8801753558014
              </Typography>
            </Box>
          </Stack>
          <Stack flexDirection="row" gap={3}>
            <Image src={email} alt="img" height={36} width={29} />
            <Box>
              <Divider
                orientation="vertical"
                variant="fullWidth"
                sx={{ borderRightWidth: "2px" }}
              />
            </Box>
            <Box pb={2}>
              <Typography fontWeight={600}>Email Me</Typography>
              <Typography variant="caption" color="text.secondary">
                mdjueal920977@gmail.com
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
