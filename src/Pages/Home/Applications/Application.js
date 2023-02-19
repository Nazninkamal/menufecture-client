import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import img from "../../../Assets/Images/upload-cad-01.svg";

const Application = () => {
    return (
       <Container>
          <Typography variant='h4'  sx={{color:"272b41", fontWeight: 600,my:5, textAlign:"center"}}>Most Important Manufacturing Applications </Typography>
              <Grid container spacing={{ xs: 1, md:2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}  >
                 <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>
                      <CardMedia component="img" sx={{width:"auto", height:"70px" }} image={img} alt="Paella dish"/>
                        <CardContent>
                          <Typography variant="h5" sx={{mb:2, color:"272b41"}}>Automotive</Typography>
                        </CardContent>
                    </Card>
                 </Grid>

                 <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>
                      <CardMedia component="img" sx={{width:"auto", height:"70px" }} image={img} alt="Paella dish"/>
                        <CardContent>
                          <Typography variant="h5" sx={{mb:2, color:"272b41"}}>Automotive</Typography>
                        </CardContent>
                    </Card>
                 </Grid>

                 <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>
                      <CardMedia component="img" sx={{width:"auto", height:"70px" }} image={img} alt="Paella dish"/>
                        <CardContent>
                          <Typography variant="h5" sx={{mb:2, color:"272b41"}}>Automotive</Typography>
                        </CardContent>
                    </Card>
                 </Grid>

                 <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>
                      <CardMedia component="img" sx={{width:"auto", height:"70px" }} image={img} alt="Paella dish"/>
                        <CardContent>
                          <Typography variant="h5" sx={{mb:2, color:"272b41"}}>Automotive</Typography>
                        </CardContent>
                    </Card>
                 </Grid>

                 <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>
                      <CardMedia component="img" sx={{width:"auto", height:"70px" }} image={img} alt="Paella dish"/>
                        <CardContent>
                          <Typography variant="h5" sx={{mb:2, color:"272b41"}}>Automotive</Typography>
                        </CardContent>
                    </Card>
                 </Grid>

                 <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>
                      <CardMedia component="img" sx={{width:"auto", height:"70px" }} image={img} alt="Paella dish"/>
                        <CardContent>
                          <Typography variant="h5" sx={{mb:2, color:"272b41"}}>Automotive</Typography>
                        </CardContent>
                    </Card>
                 </Grid>

                 <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>
                      <CardMedia component="img" sx={{width:"auto", height:"70px" }} image={img} alt="Paella dish"/>
                        <CardContent>
                          <Typography variant="h5" sx={{mb:2, color:"272b41"}}>Automotive</Typography>
                        </CardContent>
                    </Card>
                 </Grid>

                 <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>
                      <CardMedia component="img" sx={{width:"auto", height:"70px" }} image={img} alt="Paella dish"/>
                        <CardContent>
                          <Typography variant="h5" sx={{mb:2, color:"272b41"}}>Automotive</Typography>
                        </CardContent>
                    </Card>
                 </Grid>


                 <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>
                      <CardMedia component="img" sx={{width:"auto", height:"70px" }} image={img} alt="Paella dish"/>
                        <CardContent>
                          <Typography variant="h5" sx={{mb:2, color:"272b41"}}>Automotive</Typography>
                        </CardContent>
                    </Card>
                 </Grid>

                 




              </Grid>
       </Container>
    );
};

export default Application;