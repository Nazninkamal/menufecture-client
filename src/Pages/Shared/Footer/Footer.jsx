import React from 'react';
// import footerBg from '../../../Assets/Images/footer-bg.jpg';
import logo from '../../../Assets/Images/logo (1).png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Button, Grid, Typography ,Container} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';

// const footerBanner = {
//     background: `url(${footerBg})`,
    
//     backgroundColor: '#333538',


// }

const Footer = () => {
    return (
       <Box sx={{backgroundColor: "rgb(5 26 61)"}}>
         <Container >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{mb:5}}>
            <Grid item xs={3} sm={4} md={5} >
              
                <Box width={{md:"75%", xs:"100%"}}  sx={{backgroundColor:"rgb(5 26 61)",textAlign:"justify",  boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
                  <Container>
                   <Box sx={{my:-8}}>
                   <img src={logo} alt="" style={{marginTop:"10px"}}/>
                   
                   <Typography variant='subtitle1' sx={{ color:"#b5b5b6",my:2}}>A team of dentists working to ensure you receive the best treatment.
                   DocRelief is a multiple award winner. A team of dentists working to ensure you receive the best treatment.</Typography>
                   <Box sx={{pb:3}}>
                   <Box sx={{display:"flex"}}>
                   <LocalPhoneIcon sx={{backgroundColor:"#5bc198", color:"white", padding:1, borderRadius:5,mt:-1, mr:2}}/>

                   <a href="tel:31234567890" style={{textDecoration:"none"}}>
                     <Typography variant='body' sx={{color:"#b5b5b6",mt:5}}>
                       31234567890
                     </Typography>
                   </a>
                   </Box>
                   <br/>
                   <Box sx={{display:"flex"}}>
                   <MailOutlineIcon sx={{backgroundColor:"#5bc198", color:"white", padding:1, borderRadius:5, mt:-1,mr:2}}/>

                   <a href="mailto:info@mededin.com" style={{textDecoration:"none"}}>
                     <Typography variant='body' sx={{color:"#b5b5b6",mt:5}} >
                       info@mededin.com
                     </Typography>
                   </a>
                   </Box>
                   </Box>
                   </Box>
                   
               </Container>
              </Box>
            
            </Grid>
         

            <Grid item xs={1} sm={4} md={2} sx={{textAlign:"left", mt:5}}>
              <Typography variant='h6' sx={{color:"#5bc198"}}>Quick Links</Typography>
                <Box sx={{position:" absolute",width:" 70px",height:" 5px",background: "#3c3f42"}}></Box>
                    <br/>
                                   <Link to='/appoinment' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Appoinment
                                    </Typography>
                                    </Link> <br />

                                    <Link to='/dashboard' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Dashboard
                                    </Typography>
                                    </Link>
                                    <br />

                                    <Link to='/dentiest' style={{textDecoration: "none"}} >
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Our Dentists
                                    </Typography> 
                                    </Link><br />

                                    <Link to='/contact' style={{textDecoration: "none"}} >
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Contact Us
                                    </Typography> 
                                    </Link><br />

                                    <Link to='/notfound' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    404
                                    </Typography>
                                    </Link>



                                    


            </Grid>

            <Grid item xs={1} sm={4} md={2} sx={{textAlign:"left", mt:5}}>
              <Typography variant='h6' sx={{color:"#5bc198"}}>About</Typography>
                <Box sx={{position:" absolute",width:" 70px",height:" 5px",background: "#3c3f42"}}></Box>
                    <br/>
                                   <Link to='/about' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    About Us
                                    </Typography>
                                    </Link> <br />

                                    <Link to='/mission' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Our Mission
                                    </Typography>
                                    </Link>
                                    <br />

                                    <Link to='/service' style={{textDecoration: "none"}} >
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Our Service
                                    </Typography> 
                                    </Link><br />

                                    <Link to='/blogNews' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Blog & News
                                    </Typography>
                                    </Link><br />



                                    <Link to='/transport' style={{textDecoration: "none"}} >
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Transport 
                                    </Typography> 
                                    </Link>


            </Grid>

            <Grid item xs={3} sm={4} md={3} sx={{mt:5}}>
               <Button variant="outlined" size="large" sx={{width:"70%"}}>Find a Doctor</Button> <br /><br />
               <Button variant="outlined" size="large" sx={{width:"70%"}}>Career</Button> <br /><br />
               <Button variant="outlined" size="large" sx={{width:"70%"}}>Newsletter</Button><br /><br />
               <Box sx={{ color:"#b5b5b6"}}>
               < FacebookIcon sx={{mx:2}}/> <InstagramIcon/><LinkedInIcon sx={{mx:2}}/><TwitterIcon/>

               </Box>
            </Grid>


          
          </Grid>
          <hr sx={{color:"#b5b5b6", height:5}}/>
        <Typography variant="body" sx={{color:"#b5b5b6"}}>© TeethRelief 2020 Allright Reserved</Typography>
         </Container>
       
      </Box>

    
    );
};

export default Footer;