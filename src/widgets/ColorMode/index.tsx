"use client";
import { useContext } from "react";
import { ColorModeContext } from "@/theme";
import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";

const ColorMode = () => {
    const { toggleColorMode } = useContext(ColorModeContext);
    const theme = useTheme();
    const mode = theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />;
    return (
        <Box
            sx={(theme) => ({
                bgcolor: theme.palette.success.main,
            })}
            justifyContent="center"
            alignItems="center"
            borderRadius="12px 0 0 12px"
        >
            <IconButton onClick={toggleColorMode} sx={{ height: 48, width: 48 }}>
                {mode}
            </IconButton>
        </Box>
    );
};

export default ColorMode;
