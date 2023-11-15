import React, { useState } from "react";
import ButtonAppBar from "./model/Appbar";
import Schedule from "./model/Todo";
import Calendar from './model/Calendar';
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import { Paper, Box, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({
  title: {
    height: '25vh',
    width: '25vw',
  }
}));

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const classes = useStyles();

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
      <CssBaseline />
      <Paper sx={{ height: "100vh", width: "100vw" }}>
        <Box sx={{flexGrow: 1}}>
        <Box sx={{marginBottom: 10}}>
          <ButtonAppBar check={darkMode} change={toggleDarkMode} />
        </Box>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6} md={4} sx={{marginLeft: 20}}>
              <Calendar darkMode={darkMode}/>
            </Grid>
            <Grid item xs={4} md={4} className={classes.title}>
              <Schedule darkMode={darkMode} />
            </Grid>
          </Grid>
          </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
