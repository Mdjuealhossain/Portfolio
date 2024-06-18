import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import ResumeCard from "../ResumeCard";

import { ExperienceProps } from "./Types";

const Experience: FC<ExperienceProps> = () => {
  return (
    <Stack gap={3}>
      <Typography variant="h6">My Experience</Typography>
      <ResumeCard
        passyr="2023-2024"
        depertment="Frontend Developer"
        school="AlphaSaaS (Bengaluru, Karnataka, India)"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, admea essent possim iriure."
      />
      <ResumeCard
        passyr="2022-2023"
        depertment="Junior Frontend Developer"
        school="Theme-Master(Dhaka, Bangladesh)"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, admea essent possim iriure."
      />
      <ResumeCard
        passyr="2021 - 2022"
        depertment="Junior Frontend Developer"
        school="B2C Market Place Project"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, admea essent possim iriure."
      />
    </Stack>
  );
};

export default Experience;
