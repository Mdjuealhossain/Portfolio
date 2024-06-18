import { FC } from "react";
import {
  Box,
  Button,
  CardMedia,
  Hidden,
  Stack,
  Typography,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { BlogBannerProps } from "./Types";

const BlogBanner: FC<BlogBannerProps> = () => {
  return (
    <Stack py={{ xs: 6, md: 0 }}>
      <CardMedia
        sx={{ borderRadius: 0, border: "none" }}
        image="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <Stack pt={10} pb={5} height={682}>
          <Stack height="100%" justifyContent="center" alignItems="center">
            <Hidden xsUp>
              <Box
                sx={(theme) => ({
                  bgcolor: theme.palette.primary.main,
                  maxWidth: 568,
                  maxHeight: 88,
                  textAlign: "center",
                  borderRadius: 2,
                })}
              >
                <Typography variant="h2">Learn somthing new</Typography>
              </Box>
            </Hidden>
            <Stack pt={5} gap={2} flexDirection={{ xs: "column", sm: "row" }}>
              <Button variant="contained" size="large">
                <YouTubeIcon sx={{ pr: 1, fontSize: 45 }} /> tutorials
              </Button>
              <Button variant="contained" size="large">
                <PlayArrowIcon sx={{ pr: 1, fontSize: 45 }} /> Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </CardMedia>
    </Stack>
  );
};

export default BlogBanner;
