import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from "../../../Assets/Images/upload-cad-01.svg"

const HowToOrder = () => {
    return (
        <Container sx={{mb: 15}}>
          <Typography variant='h4'  sx={{color:"272b41", fontWeight: 600,my:5, textAlign:"center"}}>How to order parts? </Typography>

         <Grid container spacing={{ xs: 1, md:2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}  >
             <Grid item xs={4} sm={4} md={3}>
                 <Card>

         <CardMedia
        component="img"
        sx={{width:"auto", height:"100px",mt:2, margin: "auto" }}
        image={img1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" sx={{mb:2, color:"272b41"}}>
        Upload your CAD files
        </Typography>
        <Typography variant="body2" component="div">
          
Multiple designs for different parts can be imported at the same time to produce a single quote. In less than a minute, a detailed cost estimation appears on the screen.
        </Typography>
      </CardContent>
      
    </Card>
             </Grid>

             <Grid item xs={4} sm={4} md={3}>
                 <Card>

         <CardMedia
        component="img"
        sx={{width:"auto", height:"100px",mt:2, margin: "auto" }}
        image={img1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5"    sx={{mb:2, color:"272b41"}}>
        Choose the process
        </Typography>
        <Typography variant="body2" component="div">
          
Multiple designs for different parts can be imported at the same time to produce a single quote. In less than a minute, a detailed cost estimation appears on the screen.
        </Typography>
      </CardContent>
      
    </Card>
             </Grid>


             <Grid item xs={4} sm={4} md={3}>
                 <Card>

         <CardMedia
        component="img"
        sx={{width:"auto", height:"100px",mt:2, margin: "auto" }}
        image={img1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5"    sx={{mb:2, color:"272b41"}}>
        Order your parts online
        </Typography>
        <Typography variant="body2" component="div">
          
Multiple designs for different parts can be imported at the same time to produce a single quote. In less than a minute, a detailed cost estimation appears on the screen.
        </Typography>
      </CardContent>
      
    </Card>
             </Grid>


             <Grid item xs={4} sm={4} md={3}>
                 <Card>

         <CardMedia
        component="img"
        sx={{width:"auto", height:"100px",mt:2, margin: "auto" }}
        image={img1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5"    sx={{mb:2, color:"272b41"}}>
        Parts are Shipped!
        </Typography>
        <Typography variant="body2" component="div">
          
Multiple designs for different parts can be imported at the same time to produce a single quote. In less than a minute, a detailed cost estimation appears on the screen.
        </Typography>
      </CardContent>
      
    </Card>
             </Grid>


             

         </Grid>



        </Container>
    );
};

export default HowToOrder;