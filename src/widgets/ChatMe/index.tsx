import React, { useState } from "react";
import Image from "next/image";
import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalicRounded";
import StrikethroughSRoundedIcon from "@mui/icons-material/StrikethroughSRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import {
  Box,
  Stack,
  Typography,
  Grid,
  Link,
  MenuItem,
  Menu,
  IconButton,
  Avatar,
  TextField,
  Button,
  FormControl,
  AppBar,
  Toolbar,
  Hidden,
} from "@mui/material";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const ChatMe = () => {
  const [enter, setEnter] = useState(false);
  const [anchorElAvat, setAnchorElAvat] = useState<HTMLElement | null>(null);
  const handleOpenNavAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAvat(event.currentTarget);
  };

  const handleCloseNavAvatar = () => {
    setAnchorElAvat(null);
  };
  const icon = !enter ? (
    <ChatRoundedIcon sx={{ height: 18, width: 18 }} />
  ) : (
    <EditRoundedIcon sx={{ height: 18, width: 18 }} />
  );

  return (
    <>
      <Hidden mdDown>
        <Stack
          flexDirection="row"
          gap={1}
          justifyContent="center"
          alignItems="center"
          onClick={handleOpenNavAvatar}
          sx={{ cursor: "pointer" }}
          position="fixed"
          top={{ xs: "100%", md: "90%" }}
          right={{ md: "12%" }}
          zIndex={999}
        >
          <Box
            bgcolor="background.paper"
            px={5}
            py={1}
            borderRadius={8}
            boxShadow={24}
          >
            <Typography variant="subtitle2">
              {"Chat Me"} {"👋"}
            </Typography>
          </Box>
          <IconButton
            onMouseEnter={() => setEnter((prev) => !prev)}
            onMouseLeave={() => setEnter((prev) => !prev)}
            sx={(theme) => ({
              background: theme.palette.success.main,
              boxShadow: 24,
            })}
          >
            {icon}
          </IconButton>
        </Stack>
      </Hidden>
      <Hidden mdUp implementation="css">
        <AppBar>
          <Toolbar
            sx={(theme) => ({
              position: "fixed",
              bottom: -1,
              left: 0,
              right: 0,
              bgcolor: theme.palette.background.default,
            })}
          >
            <Stack justifyContent="center" alignItems="center" width="100%">
              <IconButton
                onClick={handleOpenNavAvatar}
                onMouseEnter={() => setEnter((prev) => !prev)}
                onMouseLeave={() => setEnter((prev) => !prev)}
                size="large"
                sx={(theme) => ({
                  background: theme.palette.success.main,
                  boxShadow: 24,
                })}
              >
                <ChatRoundedIcon sx={{ height: 18, width: 18 }} />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Menu
        sx={(theme) => ({
          right: { xs: -16, md: 0 },
          left: { xs: -16, md: 0 },
          top: { xs: 17, md: 0 },
          background: "transparent",
          "& .MuiMenu-paper": {
            borderTopRightRadius: { xs: 12, md: 8 },
            borderTopLeftRadius: { xs: 12, md: 8 },
            borderBottomRightRadius: { xs: 0, md: 8 },
            borderBottomLeftRadius: { xs: 0, md: 8 },
            boxShadow: 14,
            width: { xs: "100%", md: "auto" },
          },
        })}
        id="menu-appbar"
        anchorEl={anchorElAvat}
        onClose={handleCloseNavAvatar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElAvat)}
      >
        <Stack borderRadius={3} p={1} m={1} gap={1} position="relative">
          <Hidden mdUp>
            <IconButton
              size="small"
              sx={(theme) => ({
                position: "absolute",
                top: 7,
                left: "47%",
                bgcolor: theme.palette.success.main,
                p: 0,
              })}
            >
              <KeyboardArrowDownRoundedIcon
                sx={{ height: 32, width: 32 }}
                onClick={handleCloseNavAvatar}
              />
            </IconButton>
          </Hidden>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">
              {"Hi there!"} {"👋"}
            </Typography>
            <Stack
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <MoreVertRoundedIcon />

              <Hidden mdDown implementation="css">
                <KeyboardArrowDownRoundedIcon
                  sx={{ height: 40, width: 40 }}
                  onClick={handleCloseNavAvatar}
                />
              </Hidden>
            </Stack>
          </Stack>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap={4}
          >
            <Stack flexDirection="column">
              <Typography
                variant="caption"
                fontWeight={300}
                color="text.secondary"
              >
                Explore my website.
              </Typography>
              <Typography
                variant="caption"
                fontWeight={300}
                color="text.secondary"
              >
                Feel free to ask any questions. 🎉
              </Typography>
            </Stack>
            <Avatar src="data:image/png;base64,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" />
          </Stack>
          <Stack>
            <Typography variant="caption" fontWeight={300}>
              I respond promptly.
            </Typography>
          </Stack>
          <Box>
            <Stack
              bgcolor={(theme) => theme.palette.background.paper}
              borderRadius={2}
            >
              <Stack gap={1.5} px={1} pt={3} pb={1}>
                <Box
                  maxWidth={230}
                  width="100%"
                  bgcolor="success.main"
                  borderRadius={1}
                  px={1}
                  py={0.5}
                >
                  <Typography
                    variant="caption"
                    fontSize={{ xs: 8, md: 10 }}
                    lineHeight="normal"
                    fontWeight={300}
                    color="common.white"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius molestiae
                  </Typography>
                </Box>
                <Stack justifyContent="end" alignItems="end">
                  <Box
                    maxWidth={230}
                    width="100%"
                    bgcolor={(theme) => theme.palette.grey[600]}
                    borderRadius={1}
                    px={1}
                    py={0.5}
                  >
                    <Typography
                      variant="caption"
                      //   color="common.white"
                      fontSize={{ xs: 8, md: 10 }}
                      lineHeight="normal"
                      fontWeight={300}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius molestiae
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              <Box pt={1}>
                <FormControl
                  fullWidth
                  sx={{ border: 2, borderColor: "divider", borderRadius: 2 }}
                >
                  <Box pl={1}>
                    <TextField
                      multiline
                      variant="standard"
                      fullWidth
                      placeholder="Type something here…"
                      aria-label="Message"
                      InputProps={{ disableUnderline: true }}
                      sx={{
                        "& textarea:first-of-type": {
                          minHeight: 54,
                        },
                      }}
                      inputProps={{
                        sx: {
                          "&::placeholder": {
                            fontSize: "0.625rem",
                          },
                        },
                      }}
                    />
                  </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    // flexGrow={1}
                    py={1}
                    pr={1}
                    borderTop={2}
                    borderColor="divider"
                  >
                    <Box>
                      <IconButton size="small" disableRipple>
                        <FormatBoldRoundedIcon sx={{ height: 18, width: 18 }} />
                      </IconButton>
                      <IconButton size="small" disableRipple>
                        <FormatItalicRoundedIcon
                          sx={{ height: 18, width: 18 }}
                        />
                      </IconButton>
                      <IconButton size="small" disableRipple>
                        <StrikethroughSRoundedIcon
                          sx={{ height: 18, width: 18 }}
                        />
                      </IconButton>
                      <IconButton size="small" disableRipple>
                        <FormatListBulletedRoundedIcon
                          sx={{ height: 18, width: 18 }}
                        />
                      </IconButton>
                    </Box>
                    <Button
                      size="small"
                      color="success"
                      variant="contained"
                      sx={{ px: 1, fontSize: "0.625rem" }}
                      endIcon={
                        <SendRoundedIcon sx={{ height: 18, width: 18 }} />
                      }
                    >
                      Send
                    </Button>
                  </Stack>
                </FormControl>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Menu>
    </>
  );
};

export default ChatMe;
