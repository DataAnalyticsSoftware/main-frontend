import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import styles from './styles.module.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const BottomBarComponent = (props: any) => {
  return (
    <Box>
      <footer className={`${styles.footer}`} style={{ color: 'white' }}>
        <Container className={styles.container} maxWidth="xl">
          <Grid container spacing={3} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Primer Grid */}
            <Grid item xs={12} lg={12} style={{ display: 'flex', flexDirection: 'row' }}>
              <Box>
                <Box className={`${styles.links}`}>
                  <li style={{ marginRight: '20px' }}><Link href="#">Functions</Link></li>
                  <li style={{ marginRight: '20px' }}><Link href="#">About Us</Link></li>
                  <li style={{ marginRight: '20px' }}><Link href="#">Prices</Link></li>
                  <li style={{ marginRight: '20px' }}><Link href="#">Enter</Link></li>
                  <li style={{ marginRight: '20px' }}><Link href="#">Sign Up</Link></li>
                </Box>
                <hr style={{ color: 'white', border: '1px solid grey', width: '100vh' }}></hr>
                <Box style={{ display: 'flex', flexDirection: 'row', textAlign:'left',paddingTop:'32px' }}>
                    <div style={{marginRight:'42px'}}>
                        <Typography style={{fontWeight:600, fontSize:'16px', lineHeight:'19.2px'}} >Location</Typography>
                        <Typography style={{fontWeight:300,fontSize:'15px',lineHeight:'15px', paddingTop:'8px'}}>New York, US</Typography>
                    </div>
                    <div style={{marginRight:'30px'}}>
                        <Typography style={{fontWeight:600, fontSize:'16px', lineHeight:'19.2px'}}>Phone</Typography>
                        <Typography style={{fontWeight:300,fontSize:'15px',lineHeight:'15px', paddingTop:'8px'}}>New York, US</Typography>
                    </div>
                    <div>
                        <Typography style={{fontWeight:600, fontSize:'16px', lineHeight:'19.2px'}}>Email</Typography>
                        <Typography style={{fontWeight:300,fontSize:'15px',lineHeight:'15px', paddingTop:'8px'}}>New York, US</Typography>
                    </div>
                </Box>          
              </Box>
              <Grid item xs={12} lg={12} style={{ display: 'flex', flexDirection: 'row', justifyContent:'right',width:'400px'}}>
                    <Box style={{ width: '250px', paddingBottom: '40px' }} mt={5}>
                        <div style={{ backgroundColor: 'white', color: 'black', display: 'flex', justifyContent: 'center', borderRadius: '86px', height: '54px', alignItems: 'center'}}>
                            <div style={{ marginRight: '32px' }}><FacebookIcon fontSize='large' /></div>
                            <div style={{ marginRight: '32px' }}><TwitterIcon fontSize='large' /> </div>
                            <div><LinkedInIcon fontSize='large' /></div>
                        </div>
                        <Typography style={{paddingTop:'32px' }} variant="body2">Copyrights © 2023. All Rights Reserved</Typography>
                    </Box>
                </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </Box>
  );
};
