import { FC } from "react";
import { Grid } from "@mui/material";
import pic from "../../../public/static/images/msnger.png";

import BlogCard from "../BlogCard";

import { BlogCardsProps } from "./Types";

const BlogCards: FC<BlogCardsProps> = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Top tools for Photographers"
          des="Capturing life's moments through a creative and unique lens."
          img="https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-1.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Smashing Magazine"
          des="Covers a wide range of topics including frontend development, design, and UX."
          img="https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-2.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="A List Apart"
          des="Discusses web standards, best practices, and the broader context of web development."
          img="https://www.shutterstock.com/shutterstock/photos/301088441/display_1500/stock-photo-research-study-report-response-result-action-concept-301088441.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Frontend Focus"
          des="A weekly newsletter and blog with the latest news, and tutorials on frontend development."
          img="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_user"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="CSS-Tricks"
          des="Focuses on CSS, HTML, JavaScript, and all things related to frontend development."
          img="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Scotch.io"
          des="Provides tutorials on JavaScript frameworks, libraries, and other frontend technologies."
          img="https://cdn.pixabay.com/photo/2024/03/18/10/50/ai-generated-8640895_960_720.jpg"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="David Walsh Blog"
          des="Personal blog of David Walsh, covering various frontend technologies and development tips."
          img="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="leo"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <BlogCard
          title="Dev.to"
          des="A community-driven platform where developers share articles and tutorials on various frontend and backend technologies."
          img="https://images.pexels.com/photos/4947765/pexels-photo-4947765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="leo"
        />
      </Grid>
    </Grid>
  );
};

export default BlogCards;
