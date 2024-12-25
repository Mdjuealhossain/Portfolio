import { FC } from "react";
import { Box, Hidden } from "@mui/material";

import Header from "@/widgets/Header";
import ChatMe from "@/widgets/ChatMe";
import { CursorDot, CursorDotSingle } from "@/widgets/Cursor";
import SocialLink from "@/widgets/SocialLink";
import ColorMode from "@/widgets/ColorMode";
import { AppLayoutProps } from "./type";

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <Box position="relative" sx={{}}>
            <CursorDotSingle />
            <CursorDot />
            <Box position="fixed" left="0%" top="50%" zIndex={999}>
                <SocialLink />
            </Box>
            <Hidden mdDown>
                <Box position="fixed" right="0%" top="50%" zIndex={999}>
                    <ColorMode />
                </Box>
            </Hidden>
            <ChatMe />
            <Box>
                <Header />
            </Box>
            <Box pt={8}>{children}</Box>
        </Box>
    );
};

export default AppLayout;
