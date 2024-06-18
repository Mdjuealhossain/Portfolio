import { FC } from "react";
import { Stack, IconButton, CardMedia, Link, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TwitterIcon from "@mui/icons-material/Twitter";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

import { AboutHelpInfoProps, IconWraperPropsProps } from "./Types";

const IconWraper: FC<IconWraperPropsProps> = ({ children }) => {
  return (
    <IconButton component={Link} href="#" sx={{ boxShadow: 25 }}>
      {children}
    </IconButton>
  );
};

const AboutHelpInfo: FC<AboutHelpInfoProps> = () => {
  return (
    <Stack py={6} flexDirection="column" alignItems="center" gap={4}>
      <Box
        sx={(theme) => ({
          border: `4px solid ${theme.palette.grey[300]}`,
          ":hover": { boxShadow: 1 },
        })}
      >
        <CardMedia
          sx={{ maxWidth: 277 }}
          component="img"
          height={348}
          image="https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/57183841_350708698896126_7610830156164235264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeFaElRGqUVej9W3pHRzUJYzekZmaJR7xdZ6RmZolHvF1s_RFSaCIhmJ_z_gS4uUbj4a_8ibG42oZlFVJ_U8AMvQ&_nc_ohc=waX62YVXMaMAX-Vp8Sc&_nc_ht=scontent.fdac151-1.fna&oh=00_AfDwh9XihCnxh5nAXANpTzRL7mnxw4ZfQEDbELYapEGI6A&oe=65E6E67C"
          alt="MJ"
        ></CardMedia>
      </Box>
      <Stack gap={5}>
        <Stack
          px={11}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <IconWraper>
            <GitHubIcon sx={{ fontSize: 40 }} />
          </IconWraper>
          <IconWraper>
            <AddBusinessIcon sx={{ fontSize: 40 }} />
          </IconWraper>
          <IconWraper>
            <TwitterIcon sx={{ fontSize: 40 }} />
          </IconWraper>
        </Stack>
        <Stack
          px={11}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <IconWraper>
            <StackedLineChartIcon sx={{ fontSize: 40 }} />
          </IconWraper>
          <IconWraper>
            <SportsMmaIcon sx={{ fontSize: 40 }} />
          </IconWraper>
          <IconWraper>
            <SportsBasketballIcon sx={{ fontSize: 40 }} />
          </IconWraper>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { AboutHelpInfo, IconWraper };
