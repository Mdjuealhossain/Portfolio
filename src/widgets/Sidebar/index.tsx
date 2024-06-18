import { FC, useState } from "react";
import {
  Box,
  Link,
  Stack,
  Typography,
  Paper,
  IconButton,
  Avatar,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeRepairServiceSharpIcon from "@mui/icons-material/HomeRepairServiceSharp";
import SmsIcon from "@mui/icons-material/Sms";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import InfoIcon from "@mui/icons-material/Info";
import { SidebarProps } from "./Types";

const navData = [
  {
    id: 1,
    title: "Home",
    icon: <HomeRoundedIcon sx={{ fontSize: 30 }} />,
    link: "/",
  },
  {
    id: 2,
    title: "About",
    icon: <FolderSharedRoundedIcon />,
    link: "/about",
  },
  {
    id: 3,
    title: "Work",
    icon: <HomeRepairServiceSharpIcon />,
    link: "/work",
  },
  {
    id: 4,
    title: "Blog",
    icon: <SmsIcon />,
    link: "/blog",
  },
  {
    id: 5,
    title: "Resume",
    icon: <AssignmentLateIcon />,
    link: "/resume",
  },
  {
    id: 6,
    title: "About this page",
    icon: <InfoIcon />,
    link: "/aboutthispage",
  },
];

const Sidebar: FC<SidebarProps> = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Paper
      square
      sx={(theme) => ({
        width: theme.spacing(37.5),
        height: "100%",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      })}
    >
      <Stack justifyContent="space-between" height="100%">
        <Box
          position="absolute"
          alignSelf="center"
          border={8}
          borderColor={(theme) => theme.palette.action.focus}
          borderRadius="50%"
          top={{ xs: 92, md: 60 }}
        >
          <Avatar
            sx={{ height: { xs: 90, md: 110 }, width: { xs: 90, md: 110 } }}
            src="https://avatars.githubusercontent.com/u/123495777?s=400&u=0e510f3b9b75f6c7ed4a37632f165e341f4d14d8&v=4"
            alt="MJ"
          />
        </Box>

        <Stack
          flexDirection="column"
          pr={{ xs: 1, md: 0 }}
          pt={{ xs: 30, md: 26 }}
          alignItems="flex-start"
          gap={2}
          height="calc(100% - 48px)"
        >
          {navData.map((data) => {
            const { id, title, icon, link } = data;
            return (
              <List
                disablePadding
                key={id}
                sx={{
                  px: 2,
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
                component={Link}
                href={`${link}`}
                onClick={onClose}
              >
                <ListItemButton selected={isActive} sx={{ p: 0 }}>
                  <IconButton>{icon}</IconButton>
                  <ListItemText>
                    <Typography color="text.secondary" variant="h5">
                      {title}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </List>
            );
          })}
        </Stack>
        <Stack minHeight={48} justifyContent="center" alignItems="center">
          <Typography
            variant="caption"
            sx={(theme) => ({
              color: theme.palette.text.secondary,
            })}
          >
            2023 © Stratis Dermanoutsos
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Sidebar;
