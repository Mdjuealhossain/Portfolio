"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import name from "../../../public/Assesr/Svg/name.svg";
import location from "../../../public/Assesr/Svg/location.svg";
import call from "../../../public/Assesr/Svg/call.svg";
import email from "../../../public/Assesr/Svg/email.svg";

const ContactForm = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={7} display="flex" flexDirection="column" gap={4}>
        <Typography variant="h6">Message Me</Typography>
        <Stack flexDirection="row" gap={4}>
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
      <Grid item xs={5}>
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
{
  /* <Stack gap={3} justifyContent="center">
            <Image src={img} alt="img"  height={36} width={29} />
            <Image src={img} alt="img"  height={36} width={29} />
            <Image src={img} alt="img"  height={36} width={29} />
            <Image src={img} alt="img"  height={36} width={29} />
          </Stack>
          <Box>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              sx={{ borderRightWidth: "2px" }}
            />
          </Box>
          <Stack gap={3} justifyContent="center">
            <Box>
              <Typography fontWeight={600}>Name</Typography>
              <Typography variant="caption" color="text.secondary">
                Mohammod Jueal
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={600}>Name</Typography>
              <Typography variant="caption" color="text.secondary">
                Mohammod Jueal
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={600}>Name</Typography>
              <Typography variant="caption" color="text.secondary">
                Mohammod Jueal
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={600}>Name</Typography>
              <Typography variant="caption" color="text.secondary">
                Mohammod Jueal
              </Typography>
            </Box>
          </Stack> */
}
