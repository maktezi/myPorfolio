import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Theme = () => {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);

    const toggleDarkTheme = () => {
        setToggleDarkMode(!toggleDarkMode);
    };

    const theme = createTheme({
        palette: {
        mode: toggleDarkMode ? "dark" : "light",
        primary: { main: "#90caf9" },
        secondary: { main: "#131052" },
        background: {
            default: toggleDarkMode ? "#121212" : "#FFFFFF", // Dark or light background color
            paper: toggleDarkMode ? "#1E1E1E" : "#F5F5F5",   // Dark or light paper color (background for surfaces like cards)
        },
        common: {
            black: "#000000",
            white: "#FFFFFF",
        },
        },
    });

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}
        >
            <IconButton onClick={toggleDarkTheme}>
            {toggleDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        </div>
        </ThemeProvider>
    );
};

export default Theme;
