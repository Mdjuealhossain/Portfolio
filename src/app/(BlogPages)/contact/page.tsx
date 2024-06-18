import ContactForm from "@/widgets/ContactForm";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box py={{ md: 5 }}>
      <Container>
        <Stack alignItems="center" pb={10}>
          <Typography variant="body2" color="text.secondary" pb={2}>
            Reach out to me whenever you need.
          </Typography>
          <Typography variant="h2">Start a Conversation</Typography>
        </Stack>
        <ContactForm />
      </Container>
    </Box>
  );
};

export default Contact;
