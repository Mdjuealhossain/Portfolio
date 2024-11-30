import { FC } from "react";

import { Grid, Typography } from "@mui/material";

import ServiceCard from "@/components/ServiceCard";
import Objerb from "@/components/Objerb";

import { MyServiceProps } from "./Types";

const MyService: FC<MyServiceProps> = () => {
  return (
    <>
      <Objerb id="services">
        <Typography variant="body2" color="text.secondary" textAlign={{ xs: "center", md: "start" }} pb={2}>
          Services i offer to my clients
        </Typography>
        <Typography variant="h3" pb={6} textAlign={{ xs: "center", md: "start" }}>
          My Services
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard title="Website Development" description=" Creating bespoke websites tailored to your specific needs and branding." logo={"/assets/icons/about/web.svg"} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard
              title="Responsive Web Design"
              description="Ensuring websites look and function well on all devices, from desktops to mobile phones."
              logo={"/assets/icons/about/ResponsiveWeb.svg"}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard title="UI/UX Design" description="Crafting intuitive and visually appealing user interfaces and experiences." logo={"/assets/icons/about/design.svg"} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard title="Frontend Optimization" description="Enhancing website performance and loading times through optimization techniques." logo={"/assets/icons/about/optimaization.svg"} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard title="API Integration" description="Integrating third-party services and APIs to extend website functionality." logo={"/assets/icons/about/intigation.svg"} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard title="Dashboard Development" description="Building custom dashboards for data visualization and management." logo={"/assets/icons/about/dashboard.svg"} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard title="SEO-Friendly Development" description="Implementing best practices to ensure websites are optimized for search engines." logo={"/assets/icons/about/intigation.svg"} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard title="Progressive Web Apps" description="Creating web applications that provide a native app-like experience." logo={"/assets/icons/about/progessive.svg"} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ServiceCard title="(SPA) Development" description="Developing SPAs using frameworks like React or Angular for fast, dynamic user experiences." logo={"/assets/icons/about/spa.svg"} />
          </Grid>
        </Grid>
      </Objerb>
    </>
  );
};

export default MyService;
