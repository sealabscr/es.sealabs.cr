import React from 'react';
import LandingPage from './pages/landingPage';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';

const App = () => {
    const theme = getTheme()
    console.log("theme",theme)
    return (    
        <ThemeProvider  theme={theme}>
            <LandingPage />
        </ThemeProvider >
    );
}

export default App;