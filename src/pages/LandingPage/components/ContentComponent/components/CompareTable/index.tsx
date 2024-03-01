import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledIcon = styled('i')({
  fontSize: '50px',
});

export const CompareTable = () => {
  return (
    <>
      <Typography style={{paddingBottom:12}} variant='h4'>Why are we the best on the market?</Typography>
      <TableContainer>
        <Table style={{minWidth: 650, backgroundColor:'white', borderRadius:8}} aria-label="compare table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Compare Software's Table</strong></TableCell>
              <TableCell><strong>Basic</strong></TableCell>
              <TableCell><strong>Standard</strong></TableCell>
              <TableCell><strong>Premium</strong></TableCell>
              <TableCell><strong>Managed</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">HDD Storage</TableCell>
              <TableCell>700 MB</TableCell>
              <TableCell>1.5 GB</TableCell>
              <TableCell>50 GB</TableCell>
              <TableCell>up to 5T</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Web Server</TableCell>
              <TableCell><StyledIcon className="fas fa-check text-success" /></TableCell>
              <TableCell><StyledIcon className="fas fa-check" /></TableCell>
              <TableCell><StyledIcon className="fas fa-check" /></TableCell>
              <TableCell><StyledIcon className="fas fa-check" /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Database</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Optional</TableCell>
              <TableCell><StyledIcon className="fas fa-check" /></TableCell>
              <TableCell><StyledIcon className="fas fa-check" /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">DNS</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell><StyledIcon className="fas fa-check" /></TableCell>
              <TableCell><StyledIcon className="fas fa-check" /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Backups</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell><StyledIcon className="fas fa-check" /></TableCell>
              <TableCell><StyledIcon className="fas fa-check" /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Tech Support</TableCell>
              <TableCell>None</TableCell>
              <TableCell>$35/incident</TableCell>
              <TableCell>$15/incident</TableCell>
              <TableCell>24/7 included</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell className="fw-bold">Free</TableCell>
              <TableCell className="fw-bold">$99/mo</TableCell>
              <TableCell className="fw-bold">$179/mo</TableCell>
              <TableCell className="fw-bold"><a href="#">Contact us</a></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
