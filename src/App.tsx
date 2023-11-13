import React, { useState } from "react";
import ButtonAppBar from "./model/Appbar";
import Schedule from "./model/Schedule";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme: Theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Add CssBaseline to reset default styles */}
      <Paper
        sx={{
          height: "100vh", // Set height to 100% of viewport height
          width: "100vw", // Set width to 100% of viewport width
        }}
      >
        <ButtonAppBar check={darkMode} change={toggleDarkMode} />
        <br />
        <Schedule darkMode={darkMode} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
