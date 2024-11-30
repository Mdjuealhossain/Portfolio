import { FC } from "react";
import Marquee from "react-fast-marquee";
import { Box, Container } from "@mui/material";
import Testmonial from "@/components/Testmonial";
import Typography from "@mui/material/Typography";

import Objerb from "@/components/Objerb";
import { MyTestmonialsProps } from "./Types";

const MyTestmonials: FC<MyTestmonialsProps> = () => {
  return (
    <Objerb id="testimonials">
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" pb={2} textAlign={{ xs: "center", md: "start" }}>
          What my clients think about me
        </Typography>
        <Typography variant="h3" pb={6} textAlign={{ xs: "center", md: "start" }}>
          Testimonials
        </Typography>
      </Container>

      <Marquee speed={100} pauseOnHover={true} autoFill>
        <Box mx={1.5}>
          <Testmonial
            title="Mohammad A."
            image="/assets/images/about/amir.webp"
            description="Mohammod Jueal is an exceptionally skilled front-end developer with expertise in HTML, CSS, JavaScript, and modern frameworks. Their meticulous attention to detail, innovative problem-solving, and strong collaboration make them a valuable asset to any team. Reliable and consistently delivering high-quality work on time, Jueal is committed to continuous learning and innovation. Highly recommended!"
            subtitle="Senior Full Stack developer, AlphaSaas"
          />
        </Box>
        <Box mx={1.5}>
          <Testmonial
            title="Sabbir Ahmed"
            image="/assets/images/about/sabbir.png"
            description="Mohammod Jueal is a highly skilled front-end developer who has significantly enhanced our B2C marketplace. His expertise in HTML, CSS, and JavaScript, combined with meticulous attention to detail and excellent teamwork, makes him an invaluable asset. He consistently delivers high-quality work on time and is always eager to innovate. His contributions have greatly improved. Highly recommended!"
            subtitle="Senior Frontend developer, Theme master"
          />
        </Box>
        <Box mx={1.5}>
          <Testmonial
            title="MD. Azharul Islam"
            image="/assets/images/about/sohan.png"
            description="An exceptionally skilled front-end developer with expertise in HTML, CSS, JavaScript, and modern frameworks. Known for meticulous attention to detail, innovative problem-solving, and a collaborative mindset, they are a valuable asset to any team. Consistently delivering high-quality work on time, they demonstrate a strong commitment to continuous learning and innovation. Highly recommended!"
            subtitle="Senior Full Stack developer, Wiztechbd"
          />
        </Box>
        <Box mx={1.5}>
          <Testmonial
            title="Md. Mostafijur Rahaman Sujan"
            image="/assets/images/about/sujon.jpeg"
            description="A highly skilled front-end developer at WiztecBD, specializing in HTML, CSS, JavaScript, and modern frameworks. Renowned for precision, innovative problem-solving, and a strong collaborative approach, they consistently add exceptional value to every project. Their dedication to delivering high-quality work on time, paired with a commitment to continuous learning and innovation, makes them an indispensable asset to any team."
            subtitle="Chairmen & manager, Wiztechbd"
          />
        </Box>
      </Marquee>
    </Objerb>
  );
};

export default MyTestmonials;
