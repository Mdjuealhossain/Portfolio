import { FC } from "react";

import { Box, Grid, Link, Typography } from "@mui/material";

import ServiceCard from "@/components/ServiceCard";
import web from "../../../public/Assesr/Svg/web.svg";
import Resweb from "../../../public/Assesr/Svg/ResponsiveWeb.svg";
import Design from "../../../public/Assesr/Svg/design.svg";
import Optimaization from "../../../public/Assesr/Svg/optimaization.svg";
import Intgation from "../../../public/Assesr/Svg/intigation.svg";
import Dashboard from "../../../public/Assesr/Svg/dashboard.svg";
import SEO from "../../../public/Assesr/Svg/seo.svg";
import Progessive from "../../../public/Assesr/Svg/progessive.svg";
import SPA from "../../../public/Assesr/Svg/spa.svg";

import Objerb from "@/components/Objerb";

import { MyServiceProps } from "./Types";
import Paralux from "../Paralux";

const MyService: FC<MyServiceProps> = () => {
  return (
    <>
      <Objerb id="services">
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={{ xs: "center", md: "start" }}
          pb={2}
        >
          Services i offer to my clients
        </Typography>
        <Typography
          variant="h3"
          pb={6}
          textAlign={{ xs: "center", md: "start" }}
        >
          My Services
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="Website Development"
              description=" Creating bespoke websites tailored to your specific needs and branding."
              logo={web}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="Responsive Web Design"
              description="Ensuring websites look and function well on all devices, from desktops to mobile phones."
              logo={Resweb}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="UI/UX Design"
              description="Crafting intuitive and visually appealing user interfaces and experiences."
              logo={Design}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="Frontend Optimization"
              description="Enhancing website performance and loading times through optimization techniques."
              logo={Optimaization}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="API Integration"
              description="Integrating third-party services and APIs to extend website functionality."
              logo={Intgation}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="Dashboard Development"
              description="Building custom dashboards for data visualization and management."
              logo={Dashboard}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="SEO-Friendly Development"
              description="Implementing best practices to ensure websites are optimized for search engines."
              logo={SEO}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="Progressive Web Apps"
              description="Creating web applications that provide a native app-like experience."
              logo={Progessive}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="(SPA) Development"
              description="Developing SPAs using frameworks like React or Angular for fast, dynamic user experiences."
              logo={SPA}
            />
          </Grid>
        </Grid>
      </Objerb>
    </>
  );
};

export default MyService;
