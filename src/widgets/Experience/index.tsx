import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import ResumeCard from "../ResumeCard";
import { ExperienceProps } from "./Types";

const Experience: FC<ExperienceProps> = () => {
    return (
        <Stack gap={3}>
            <Typography variant="h5" textAlign={{ xs: "center", md: "start" }}>
                Experience
            </Typography>
            <ResumeCard
                passyr="2022-2023"
                depertment="Junior Frontend Developer"
                school="Theme-Master(Dhaka, Bangladesh)"
                description="As a Front-End Developer Intern at Theme Master, I create responsive and visually appealing web pages using HTML, CSS, and JavaScript. I collaborate with the design team to implement and ensure the technical feasibility of UI/UX designs, test and debug code, and optimize web pages for performance. This role offers hands-on experience and the chance to contribute to real-world projects, enhancing my front-end development skills."
            />
            <ResumeCard
                passyr="2023-2024"
                depertment="Frontend Developer"
                school="AlphaSaaS (Bengaluru, Karnataka, India)"
                description="As a React Frontend Developer at Alphasaas, you specialize in creating intuitive, high-performance user interfaces for cutting-edge SaaS applications. By leveraging React, JavaScript, and modern web development practices, you deliver responsive, visually engaging, and seamless experiences that drive user satisfaction and business success."
            />

            <ResumeCard
                passyr="2024 - present"
                depertment="Frontend Developer"
                school="WiztechBD, Bangladesh"
                description="As a Frontend React Developer at WiztecBD, I develop cutting-edge, responsive web applications utilizing React.js, Next.js, and Tailwind CSS. Leveraging SCSS for efficient styling and Figma for seamless design collaboration, I craft scalable, user-friendly UI components that prioritize both performance and user experience. I work closely with cross-functional teams to deliver robust solutions, consistently staying up-to-date with the latest industry trends and front-end best practices."
            />
        </Stack>
    );
};

export default Experience;
