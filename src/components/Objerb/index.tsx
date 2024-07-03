import { FC, useEffect } from "react";
import { Stack } from "@mui/material";

import { ObjerbProps } from "./Types";

const Objerb: FC<ObjerbProps> = ({ id, children }: any) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.pushState(null, "", `#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <Stack component="section" id={`${id}`}>
      {children}
    </Stack>
  );
};

export default Objerb;
