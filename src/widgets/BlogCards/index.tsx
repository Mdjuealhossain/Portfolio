import { FC } from "react";
import { Grid } from "@mui/material";

import BlogCard from "../BlogCard";

import { BlogCardsProps } from "./Types";

const BlogCards: FC<BlogCardsProps> = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Top tools for Photographers"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-1.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Top tools for Photographers"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-2.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="First Respose"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://www.shutterstock.com/shutterstock/photos/301088441/display_1500/stock-photo-research-study-report-response-result-action-concept-301088441.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Top tools for Photographers"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-1.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Top tools for Photographers"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-2.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="First Respose"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://www.shutterstock.com/shutterstock/photos/301088441/display_1500/stock-photo-research-study-report-response-result-action-concept-301088441.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Top tools for Photographers"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-2.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="First Respose"
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          img="https://www.shutterstock.com/shutterstock/photos/301088441/display_1500/stock-photo-research-study-report-response-result-action-concept-301088441.jpg"
          alt="leo"
        />
      </Grid>
    </Grid>
  );
};

export default BlogCards;
