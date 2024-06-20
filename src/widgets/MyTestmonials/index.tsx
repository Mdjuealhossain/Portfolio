import { useState } from "react";

import { Box, Grid, Paper, Stack } from "@mui/material";
import Testmonial from "@/components/Testmonial";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Hidden } from "@mui/material";

const images = [
  {
    title: "Mohammad A.",
    image:
      "https://cdn5.f-cdn.com/ppic/57478450/logo/7396874/profile_logo_7396874.jpg?image-optimizer=force&format=webply&width=120",
    description:
      "Mohammod Jueal is an exceptionally skilled front-end developer with expertise in HTML, CSS, JavaScript, and modern frameworks. Their meticulous attention to detail, innovative problem-solving, and strong collaboration make them a valuable asset to any team. Reliable and consistently delivering high-quality work on time, Jueal is committed to continuous learning and innovation. Highly recommended!",
    subtitle: "Project Maneger",
  },
  {
    title: "Sabbir Ahmed",
    image:
      "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/375058363_1785646171855309_1476193012938187004_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEIQ3AU-U0szQig5BjNXSSmIEu7ZAitcU0gS7tkCK1xTZ7wRaL_TjQCr6b5X2m914pLNHro9ZmCtHERpTytDuC6&_nc_ohc=0HyFr5Y-BUMQ7kNvgHkDeo1&_nc_ht=scontent.fdac24-3.fna&oh=00_AYBqb1aHQwjUVXTUCQmLwEAnJj7I7RkA0wgzfDpluKU7dg&oe=6679AE41",
    description:
      "Mohammod Jueal is a highly skilled front-end developer who has significantly enhanced our B2C marketplace. His expertise in HTML, CSS, and JavaScript, combined with meticulous attention to detail and excellent teamwork, makes him an invaluable asset. He consistently delivers high-quality work on time and is always eager to innovate. His contributions have greatly improved. Highly recommended!",
    subtitle: "Project Maneger",
  },
];
const steps = [
  {
    title: "Mohammad A.",
    image:
      "https://cdn5.f-cdn.com/ppic/57478450/logo/7396874/profile_logo_7396874.jpg?image-optimizer=force&format=webply&width=120",
    description:
      "Mohammod Jueal is an exceptionally skilled front-end developer with expertise in HTML, CSS, JavaScript, and modern frameworks. Their meticulous attention to detail, innovative problem-solving, and strong collaboration make them a valuable asset to any team. Reliable and consistently delivering high-quality work on time, Jueal is committed to continuous learning and innovation. Highly recommended!",
    subtitle: "Project Maneger",
  },
  {
    title: "Sabbir Ahmed",
    image:
      "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/375058363_1785646171855309_1476193012938187004_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEIQ3AU-U0szQig5BjNXSSmIEu7ZAitcU0gS7tkCK1xTZ7wRaL_TjQCr6b5X2m914pLNHro9ZmCtHERpTytDuC6&_nc_ohc=0HyFr5Y-BUMQ7kNvgHkDeo1&_nc_ht=scontent.fdac24-3.fna&oh=00_AYBqb1aHQwjUVXTUCQmLwEAnJj7I7RkA0wgzfDpluKU7dg&oe=6679AE41",
    description:
      "Mohammod Jueal is a highly skilled front-end developer who has significantly enhanced our B2C marketplace. His expertise in HTML, CSS, and JavaScript, combined with meticulous attention to detail and excellent teamwork, makes him an invaluable asset. He consistently delivers high-quality work on time and is always eager to innovate. His contributions have greatly improved. Highly recommended!",
    subtitle: "Project Maneger",
  },
];

const MyTestmonials = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Stack>
      <Typography
        variant="body2"
        color="text.secondary"
        pb={2}
        textAlign={{ xs: "center", md: "start" }}
      >
        What my clients think about me
      </Typography>
      <Typography variant="h3" pb={6} textAlign={{ xs: "center", md: "start" }}>
        Testimonials
      </Typography>
      <Hidden mdUp implementation="css">
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Testmonial
            title={steps[activeStep].title}
            image={steps[activeStep].image}
            description={steps[activeStep].description}
            subtitle={steps[activeStep].subtitle}
          />

          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={() => ({
              "& .MuiMobileStepper-dotActive": {
                backgroundColor: theme.palette.success.main,
              },
            })}
            nextButton={
              <Button
                size="small"
                color="success"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                color="success"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
        {/* {images.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Testmonial
                title={step.title}
                image={step.image}
                description={step.description}
                subtitle={step.subtitle}
              />
            ) : null}
          </div>
        ))}

        <MobileStepper
          color="success.main"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={() => ({
            "& .MuiMobileStepper-dotActive": {
              backgroundColor: theme.palette.success.main,
            },
          })}
          nextButton={
            <Button
              size="small"
              color="success"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              color="success"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        /> */}
      </Hidden>
      <Hidden mdDown implementation="css">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Testmonial
              title="Mohammad A."
              image="https://cdn5.f-cdn.com/ppic/57478450/logo/7396874/profile_logo_7396874.jpg?image-optimizer=force&format=webply&width=120"
              description="Mohammod Jueal is an exceptionally skilled front-end developer with expertise in HTML, CSS, JavaScript, and modern frameworks. Their meticulous attention to detail, innovative problem-solving, and strong collaboration make them a valuable asset to any team. Reliable and consistently delivering high-quality work on time, Jueal is committed to continuous learning and innovation. Highly recommended!"
              subtitle="Project Maneger"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Testmonial
              title="Sabbir Ahmed"
              image="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/375058363_1785646171855309_1476193012938187004_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEIQ3AU-U0szQig5BjNXSSmIEu7ZAitcU0gS7tkCK1xTZ7wRaL_TjQCr6b5X2m914pLNHro9ZmCtHERpTytDuC6&_nc_ohc=0HyFr5Y-BUMQ7kNvgHkDeo1&_nc_ht=scontent.fdac24-3.fna&oh=00_AYBqb1aHQwjUVXTUCQmLwEAnJj7I7RkA0wgzfDpluKU7dg&oe=6679AE41"
              description="Mohammod Jueal is a highly skilled front-end developer who has significantly enhanced our B2C marketplace. His expertise in HTML, CSS, and JavaScript, combined with meticulous attention to detail and excellent teamwork, makes him an invaluable asset. He consistently delivers high-quality work on time and is always eager to innovate. His contributions have greatly improved. Highly recommended!"
              subtitle="Project Maneger"
            />
          </Grid>
        </Grid>
      </Hidden>
    </Stack>
  );
};

export default MyTestmonials;
