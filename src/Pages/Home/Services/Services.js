import React from 'react';
import { Button, Card, CardActions, CardMedia, Container, Grid, Typography } from '@mui/material';
import service1 from "../../../Assets/Images/services/CNC Machining 3.png";
import service2 from "../../../Assets/Images/services/Die casting 1.png";
import service3 from "../../../Assets/Images/services/Injection Molding 1.png";
import service4 from "../../../Assets/Images/services/Sheet Metal 2.png";

const Services = () => {
    return (
     <Container sx={{mt: -10}}>

       <Grid container spacing={{ xs: 3, md:5 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}  >
          <Grid item xs={4} sm={4} md={3}>
             <Card sx={{backgroundColor:"rgb(5 26 61)"}}>
               <Typography variant="h5" sx={{mb:2, color:"white", textAlign:"center", my:3, fontWeight: 500}}>CNC Machining </Typography>
                  <CardMedia
                       component="img"
                       sx={{width:"auto", height:"100px", margin: "auto" }}
                       image={service1}
                       alt="Paella dish"
                     />
                    
                <CardActions sx={{mt:5, mb:1}}>
                  <Button variant="outlined" fullWidth sx={{backgroundColor: "transparent", color:"white", border: " 1px solid white" }}>Learn More</Button>
               </CardActions>
            </Card>
          </Grid>


          <Grid item xs={4} sm={4} md={3}>
             <Card sx={{backgroundColor:"rgb(240 246 252)"}}>
               <Typography variant="h5" sx={{mb:2, color:"272b41", textAlign:"center", my:3, fontWeight: 500}}> Die Casting</Typography>
                  <CardMedia
                       component="img"
                       sx={{width:"auto", height:"100px", margin: "auto" }}
                       image={service2}
                       alt="Paella dish"
                     />
                    
                <CardActions sx={{mt:5, mb:1}}>
                  <Button variant="outlined" fullWidth >Learn More</Button>
               </CardActions>
            </Card>
          </Grid>


          <Grid item xs={4} sm={4} md={3}>
             <Card sx={{backgroundColor:"rgb(240 246 252)"}}>
               <Typography variant="h5" sx={{mb:2, color:"272b41", textAlign:"center", my:3, fontWeight: 500}}>Injection Moulding </Typography>
                  <CardMedia
                       component="img"
                       sx={{width:"auto", height:"100px", margin: "auto" }}
                       image={service3}
                       alt="Paella dish"
                     />
                    
                <CardActions sx={{mt:5, mb:1}}>
                  <Button variant="outlined" fullWidth >Learn More</Button>
               </CardActions>
            </Card>
          </Grid>


          <Grid item xs={4} sm={4} md={3}>
             <Card sx={{backgroundColor:"rgb(240 246 252)"}}>
               <Typography variant="h5" sx={{mb:2, color:"272b41", textAlign:"center", my:3, fontWeight: 500}}> Sheet Metal </Typography>
                  <CardMedia
                       component="img"
                       sx={{width:"auto", height:"100px", margin: "auto" }}
                       image={service4}
                       alt="Paella dish"
                     />
                    
                <CardActions sx={{mt:5, mb:1}}>
                  <Button variant="outlined" fullWidth >Learn More</Button>
               </CardActions>
            </Card>
          </Grid>

          




       </Grid>
    </Container>
    );
};

export default Services;