import { useTheme } from "./ThemeContext"
import React from 'react'
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';



export const Theme = () => {
    const  {theme, toggleTheme} = useTheme();

    return (
        <Container fixed>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' , border: "1px solid #cfe8fc"}} 
                       
            >  
                <Typography sx={{py: '10px'}}>Current theme: {theme}</Typography > 
                <Button onClick={toggleTheme} variant="outlined">Toggle Theme</Button>
            </Box> 
        </Container>
    );
};