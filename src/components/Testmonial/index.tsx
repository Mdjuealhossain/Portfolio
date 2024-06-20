import React, { FC, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { TestmonialProps } from "./Types";
import Quote from "../../../public/Assesr/Svg/quote.svg";
import Image from "next/image";

const Testmonial: FC<TestmonialProps> = ({
  title,
  description,
  subtitle,
  image,
}) => {
  const [showMore, setShomore] = useState(false);
  return (
    <Card
      sx={(theme) => ({
        py: { xs: 3, md: 5 },
        px: { xs: 4, md: 6 },
        boxShadow: theme.shadows[13],
        ":hover": {
          transform: "translateY(-15px)",
          boxShadow: theme.shadows[24],
          transition: "all .7s",
        },
      })}
    >
      <CardHeader
        sx={{ p: 0, pb: 3 }}
        avatar={<Avatar src={image} sx={{ height: 54, width: 54 }} />}
        title={<Typography>{title}</Typography>}
        action={<Image src={Quote} alt="quote" />}
        subheader={
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        }
      />
      <CardContent sx={{ p: 0 }}>
        <Stack gap={3} onClick={() => setShomore(!showMore)}>
          <Typography color="text.secondary">
            {showMore ? description : `${description.substring(0, 209)}`}
            <Box component="span" color="inherit">
              {!showMore && (
                <Typography component="span" variant="subtitle2">
                  ...see more
                </Typography>
              )}
            </Box>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Testmonial;
