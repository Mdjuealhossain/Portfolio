import Education from "@/widgets/Education";
import Experience from "@/widgets/Experience";
import MySkills from "@/widgets/MySkills";
import Tour from "@/widgets/Tour";

import { Box, Container, Grid, Typography } from "@mui/material";

const Resume = () => {
  return (
    <Box py={{ xs: 8, md: 5 }}>
      <Container>
        <Grid container rowSpacing={10} columnSpacing={3}>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="body2" color="text.secondary" pb={2}>
              Check out my Resume
            </Typography>
            <Typography variant="h2">Resume</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Education />
          </Grid>
          <Grid item xs={12} md={6}>
            <Experience />
          </Grid>
          <Grid item xs={12}>
            <MySkills />
          </Grid>
          <Grid item xs={12}>
            <Tour />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Resume;
