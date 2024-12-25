"use client";
import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Hidden } from "@mui/material";

const SocialLink = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "https://github.com/Mdjuealhossain", icon: <GitHubIcon sx={{ fontSize: 20 }} />, alt: "github" },
        { href: "https://www.facebook.com/petedilam.ridoydani", icon: <FacebookRoundedIcon sx={{ fontSize: 20 }} />, alt: "fb" },
        { href: "#", icon: <LinkedInIcon sx={{ fontSize: 20 }} />, alt: "linked" },
        { href: "https://www.linkedin.com/in/md-jueal-hossain-2386aa291/", icon: <TwitterIcon />, alt: "x" },
    ];

    return (
        <>
            {/* Desktop View */}
            <Hidden mdDown>
                <Box
                    display="flex"
                    sx={(theme) => ({
                        px: 1,
                        py: 2,
                        backgroundColor: theme.palette.success.main,
                        boxShadow: 3,
                        flexDirection: "column",
                        gap: 2,
                        borderRadius: "0 12px 12px 0",
                    })}
                >
                    {links.map((link, index) => (
                        <IconButton
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={(theme) => ({
                                width: 20,
                                height: 20,
                                color: theme.palette.text.primary,
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: 3,
                                },
                                transition: "all 0.4s",
                            })}
                        >
                            {link.icon}
                        </IconButton>
                    ))}
                </Box>
            </Hidden>

            {/* Mobile View */}
            <Hidden mdUp>
                <Box
                    sx={{
                        py: 1,
                        backgroundColor: "success.main",
                        boxShadow: 3,
                        flexDirection: "column",
                        borderRadius: "0 12px 12px 0",
                    }}
                >
                    <IconButton sx={{ p: 0.25 }} onClick={() => setOpen((prev) => !prev)}>
                        <Image src="/assets/icons/contact.svg" height={32} width={32} alt="contact" />
                    </IconButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box
                            sx={(theme) => ({
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 1,
                                mt: 1,
                                overflow: "hidden",
                            })}
                        >
                            {links.map((link, index) => (
                                <IconButton sx={{ width: 20, height: 20 }} key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Collapse>
                </Box>
            </Hidden>
        </>
    );
};

export default SocialLink;
