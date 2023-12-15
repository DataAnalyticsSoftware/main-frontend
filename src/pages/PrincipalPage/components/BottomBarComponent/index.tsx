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
          <Grid container spacing={3} style={{ display: 'flex', flexDirection:'column'}}>
            {/* Primer Grid */}
            <Grid xs={12} lg={4} style={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <ul className={`${styles.links}`}>
                  <li style={{marginRight:'20px'}}><Link href="#">Functions</Link></li>
                  <li style={{marginRight:'20px'}}><Link href="#">About Us</Link></li>
                  <li style={{marginRight:'20px'}}><Link href="#">Prices</Link></li>
                  <li style={{marginRight:'20px'}}><Link href="#">Enter</Link></li>
                  <li style={{marginRight:'20px'}}><Link href="#">Sign Up</Link></li>
                </ul>
                <hr style={{color:'white', border:'1px solid white', width:'100vh'}}></hr>
              </Box>
            </Grid>

            {/* Segundo Grid */}
            <Grid xs={12} lg={12} style={{ display: 'flex', flexDirection: 'row' }}>
              <Box style={{width:'150px'}}>
                <Typography variant="h6">Location</Typography>
                <Typography>New York, US</Typography>
              </Box>
              <Box style={{width:'150px'}}>
                <Typography variant="h6">Phone</Typography>
                <Typography>New York, US</Typography>
              </Box>
              <Box style={{width:'150px'}}>
                <Typography variant="h6">Email</Typography>
                <Typography>New York, US</Typography>
              </Box>
              <hr></hr>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </Box>
  );
};

