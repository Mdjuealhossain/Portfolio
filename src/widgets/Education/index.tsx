import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import ResumeCard from "../ResumeCard";

import { EducationProps } from "./Types";

const Education: FC<EducationProps> = () => {
  return (
    <Stack gap={3}>
      <Typography variant="h6">My Education</Typography>
      <ResumeCard
        passyr="2016-2017"
        depertment="Secondary School Certificate at Science"
        school="Uttar Shahbajpure G.I"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure."
      />
      <ResumeCard
        passyr="2017-2020"
        depertment="Diploma in Engneering"
        school="Barishal PolyTechnic Institute"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure."
      />
      <ResumeCard
        passyr="2020 - 2021"
        depertment="Intern as Frontend Developer"
        school="Theme Master IT Comp"
        description="Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure."
      />
    </Stack>
  );
};

export default Education;
