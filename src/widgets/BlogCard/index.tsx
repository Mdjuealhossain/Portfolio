import { FC } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Stack,
} from "@mui/material";

import { BlogCardProps } from "./type";
import { Theme } from "@mui/material/styles";

const BlogCard: FC<BlogCardProps> = ({ title, des, img, alt }) => {
  return (
    <Card sx={{ bgcolor: "transparent" }} elevation={0}>
      <Box position="relative">
        <CardMedia height={230} component="img" image={img} alt={alt} />
        <Box
          position="absolute"
          left={0}
          bottom={0}
          bgcolor={(theme) => theme.palette.success.main}
          px={1.75}
          py={0.25}
        >
          <Typography>11 Dec 20</Typography>
        </Box>
      </Box>
      <CardContent sx={{ p: 0, pt: 2.5 }}>
        <Box>
          <Typography variant="subtitle1" fontWeight={600} pb={0.75}>
            {title}
          </Typography>
          {des && (
            <Typography variant="caption" color="text.secondary">
              {des}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
