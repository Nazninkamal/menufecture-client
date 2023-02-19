import { Button, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../Assets/Images/hero_area.jpg'
import { createTheme, ThemeProvider } from '@mui/material/styles';




const Banner = () => {
    const theme = createTheme();
    theme.typography.h2 = {
        fontSize: '2.5rem',
        '@media (min-width:600px)': {
          fontSize: '3.5rem',
          textAlign: 'center'
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '4.5rem',
          textAlign: 'center'
        },
      };

      theme.typography.h5 = {
        // fontSize: '2.5rem',
        '@media (min-width:600px)': {
        //   fontSize: '3.5rem',
          textAlign: 'center'
        },
        [theme.breakpoints.up('md')]: {
        //   fontSize: '4.5rem',
          textAlign: 'center'
        },
      };
      
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // my: 3
        }}>
     
     <Container>
      <Box sx={{pt:'10rem'}}>
         <ThemeProvider theme={theme}>
            <Typography  variant='h2' sx={{color: "white", marginBottom:"1rem",  fontWeight: 700}}>Digital Manufacturing</Typography>
         </ThemeProvider>
        <ThemeProvider theme={theme}>
            <Typography variant='h5' sx={{color: "white",  fontSize: "20px", marginBottom:"1rem",  fontWeight: 400}}>We’re the the best of architects and engineering creative, passionate and with us let think out of the box.</Typography>
       </ThemeProvider>

      </Box>
     
      
      <Grid container spacing={{ xs: 1, md:1 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}  paddingX={{md: "20rem"}} >
         <Grid item xs={4} sm={8} md={6}>
         <Box textAlign={{md: "center", sm:"center", xs: "left"}}>
      <Button variant="contained" size="large" >
      Get Your Instant Quote   
        </Button>
       
      </Box>
     </Grid>

  <Grid item xs={4} sm={8} md={6}>
  <Box textAlign={{md: "center", sm:"center", xs: "left"}} >
     
        <Button variant="contained" size="large"  sx={{backgroundColor: "transparent", color:"white", border: " 1px solid blue" }}>
          Sample Design Analysis
        </Button>
      </Box>
  </Grid>
  </Grid>


     </Container>

    </Box>
   
    );
};

export default Banner;