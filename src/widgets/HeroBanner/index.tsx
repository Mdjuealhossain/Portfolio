"use client";
import { FC, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Typewriter from "typewriter-effect";
import { Box, Stack, Typography, CardMedia, Button, Hidden } from "@mui/material";

import { imges, marqueImage } from "@/data";
import { HeroBannerProps } from "./Types";

const HeroBanner: FC<HeroBannerProps> = ({ name, dev, free, des }) => {
    const [img, setImg] = useState(imges[0]);

    useEffect(() => {
        let indexImg = 0;
        const interval = setInterval(() => {
            setTimeout(() => {
                setImg(imges[indexImg]);
                indexImg = (indexImg + 1) % imges.length;
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <CardMedia
            image={img}
            sx={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: { xs: "calc(100vh - 128px)", md: "calc(100vh - 64px)" },
            }}
        >
            <Stack justifyContent="center" alignItems="center" height="100%" px={2} bgcolor={(theme) => (theme.palette.mode === "dark" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.4)")}>
                <Typography
                    variant="h1"
                    mb={2}
                    sx={(theme) => ({
                        backgroundcolor: "primary",
                        backgroundImage: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.secondary.dark},${theme.palette.success.main})`,
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    })}
                >
                    {name}
                </Typography>

                <Box component={Typography} variant="h4" textAlign="center">
                    <Typewriter
                        options={{
                            strings: [dev, des, free],
                            autoStart: true,
                            //   increase speed
                            delay: 50,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </Box>

                <Stack position="absolute" top="68%" left={0} right={0}>
                    <Marquee speed={30} pauseOnClick autoFill>
                        {marqueImage.map((img, index) => (
                            <Box key={index} mx={{ xs: 1.5, md: 2.5 }} boxShadow={23}>
                                <Box
                                    component="img"
                                    src={img.img}
                                    alt={img.alt}
                                    height={{ xs: 35, md: 50 }}
                                    width={{ xs: 35, md: 50 }}
                                    sx={{
                                        filter: "grayscale(100%)",
                                        transition: "filter 0.2s ease-in-out",
                                        "&:hover": {
                                            filter: "grayscale(0%)",
                                        },
                                    }}
                                />
                            </Box>
                        ))}
                    </Marquee>
                    <Stack justifyContent="center" alignItems="center" mt={{ xs: 4, md: 8 }}>
                        <a href="/assets/document/jueal(Developer)(latest)...pdf.pdf" download="Md. Jueal.pdf">
                            <Hidden mdUp>
                                <Button variant="contained" size="small" sx={(theme) => ({ borderRadius: 30, background: `linear-gradient(-45deg, ${theme.palette.success.main}, ${theme.palette.secondary.dark},${theme.palette.success.main})` })}>
                                    Download CV
                                </Button>
                            </Hidden>
                            <Hidden mdDown>
                                <Button variant="contained" sx={(theme) => ({ borderRadius: 30, background: `linear-gradient(-45deg, ${theme.palette.success.main}, ${theme.palette.secondary.dark},${theme.palette.success.main})` })}>
                                    Download CV
                                </Button>
                            </Hidden>
                        </a>
                    </Stack>
                </Stack>
            </Stack>
        </CardMedia>
    );
};

export default HeroBanner;
