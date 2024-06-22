"use client";
import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BlogBanner from "@/widgets/BlogBanner";
import BlogCards from "@/widgets/BlogCards";

const Blog = () => {
  return (
    <Box py={5}>
      <Container>
        <Stack alignItems="center" mb={{ xs: 6, md: 10 }}>
          <Typography variant="body2" color="text.secondary" pb={2}>
            Check out my latest blog posts
          </Typography>
          <Typography variant="h2">My Blog</Typography>
        </Stack>
        <BlogCards />
      </Container>
    </Box>
  );
};

export default Blog;
