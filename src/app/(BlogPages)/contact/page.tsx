import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import Transition from "@/components/Transition";
import ContactForm from "@/widgets/ContactForm";

const Contact = () => {
  return (
    <Transition>
      <Box py={5}>
        <Container>
          <Stack
            alignItems="center"
            justifyContent="center"
            mb={{ xs: 6, md: 10 }}
          >
            <Typography variant="body2" color="text.secondary" pb={2}>
              Reach out to me whenever you need.
            </Typography>
            <Typography variant="h2">Begin a Dialogue</Typography>
          </Stack>
          <ContactForm />
        </Container>
      </Box>
    </Transition>
  );
};

export default Contact;
