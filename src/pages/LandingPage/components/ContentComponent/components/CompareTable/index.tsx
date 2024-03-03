import React from 'react';
import './styles.module.scss'
import { styled } from '@mui/system';

const StyledIcon = styled('i')({
  fontSize: '50px',
});

export const CompareTable = () => {
  return (
    <>
      <h1 style={{paddingBottom:12}}>Why are we <span style={{color:'#fe5b05', paddingBottom:2, paddingLeft:2}}>the best</span> on the market?</h1>
      <div className="table-container" style={{ overflowX: 'auto',position: 'relative', width: 'calc(100vw - 64px)'}}>
    <table aria-label="compare table">
      <thead>
        <tr>
          <th>Compare Software's Table</th>
          <th>Basic</th>
          <th>Standard</th>
          <th>Premium</th>
          <th>Managed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HDD Storage</td>
          <td>700 MB</td>
          <td>1.5 GB</td>
          <td>50 GB</td>
          <td>up to 5T</td>
        </tr>
        <tr>
          <td>Web Server</td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>Database</td>
          <td>-</td>
          <td>Optional</td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>DNS</td>
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
          <td>Tech Support</td>
          <td>None</td>
          <td>$35/incident</td>
          <td>$15/incident</td>
          <td>24/7 included</td>
        </tr>
        <tr>
          <td></td>
          <td className="fw-bold">Free</td>
          <td className="fw-bold">$99/mo</td>
          <td className="fw-bold">$179/mo</td>
          <td className="fw-bold"><a href="#">Contact us</a></td>
        </tr>
      </tbody>
    </table>
  </div>
    </>
  );
};
