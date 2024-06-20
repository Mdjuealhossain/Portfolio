import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { ServiceCardProps } from "./Types";

import Image from "next/image";

const ServiceCard: FC<ServiceCardProps> = ({ title, description, logo }) => {
  return (
    <Card
      sx={(theme) => ({
        py: { xs: 3, md: 3.5 },
        px: { xs: 4, md: 4.5 },
        boxShadow: theme.shadows[13],
        ":hover": {
          transform: "translateY(-15px)",
          boxShadow: theme.shadows[24],
          transition: "all .7s",
        },
      })}
    >
      <Image src={logo} alt="web" height={55} width={55} />
      <CardHeader
        sx={{ p: 0, pt: 2.5, pb: 1.5 }}
        title={<Typography variant="subtitle1">{title}</Typography>}
      />
      <CardContent sx={{ p: 0 }}>
        {description.length >= 70 && (
          <Typography color="text.secondary" variant="caption">
            {description.slice(0, 65)}
            {"..."}
          </Typography>
        )}
        {description.length < 70 && (
          <Typography color="text.secondary" variant="caption">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
