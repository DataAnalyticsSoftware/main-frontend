import React from 'react';
import './styles.module.scss'
import { styled } from '@mui/system';
import { Box } from '@mui/material';

const StyledIcon = styled('i')({
  fontSize: '50px',
});

export const CompareTable = () => {
  return (
    <>
    <Box sx={{textAlign:{xs:'left', sm:'left', md:'center', lg:'center'}}}>
      <h1 style={{paddingBottom:12, paddingTop:24, fontWeight:700}}>Why are we <span style={{color:'#fe5b05', paddingBottom:2, paddingLeft:2}}>the best</span> on the market?</h1>
    </Box>
      <div className="table-container" style={{ overflowX: 'auto',position: 'relative', width: 'calc(100%)'}}>
    <table aria-label="compare table">
      <thead>
        <tr>
          <th>Compare Software's Table</th>
          <th>Basic</th>
          <th>Standard</th>
          <th>Premium</th>
          <th>Business</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Contacts Imported</td>
          <td>300</td>
          <td>4.500</td>
          <td>20.000</td>
          <td>Contact Us</td>
        </tr>  
        <tr>
          <td>Users</td>
          <td>1</td>
          <td>2</td>
          <td>5</td>
          <td>10-30</td>
        </tr>     
        <tr>
          <td>Nº Collections</td>
          <td>1 Collection</td>
          <td>2 Collections</td>
          <td>5 Collections</td>
          <td>Unlimited Collections</td>
        </tr>
        <tr>
          <td>Support</td>
          <td>Email support for 30 days</td>
          <td>Email & Live Chat</td>
          <td>24/7</td>
          <td>24/7</td>
        </tr>
        <tr>
          <td>Data & Analytics</td>
          <td>-</td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>Advantage Segmentation</td>
          <td>-</td>
          <td>-</td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>CRM Links</td>
          <td>-</td>
          <td>-</td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>Backups</td>
          <td>-</td>
          <td>-</td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>Unique Database</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>Tech Support</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>Contact Us</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>Free</td>
          <td>39,99€</td>
          <td>69,99€</td>
          <td>Contact Us</td>
        </tr>
      </tbody>
    </table>
  </div>
    </>
  );
};
