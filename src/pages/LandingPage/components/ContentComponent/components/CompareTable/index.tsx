import React, { useContext } from 'react';
import './styles.module.scss'
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { GenericContext } from '../../../../../../context/GenericContext';

const StyledIcon = styled('i')({
  fontSize: '50px',
});

export const CompareTable = () => {

  const { t } = useContext(GenericContext)

  return (
    <>
    <Box sx={{textAlign:{xs:'left', sm:'left', md:'center', lg:'center'}, paddingTop:12}}>
      <h1 style={{paddingBottom:12, paddingTop:24, fontWeight:700}}>{t('compareTable.title-1')}<span style={{color:'#fe5b05', paddingBottom:2, paddingLeft:2}}>{t('compareTable.title-2')}</span>{t('compareTable.title-3')}</h1>
    </Box>
      <div className="table-container" style={{ overflowX: 'auto',position: 'relative', width: 'calc(100%)'}}>
    <table aria-label="compare table">
      <thead>
        <tr>
          <th>{t('compareTable.table-title-1')}</th>
          <th>{t('compareTable.table-title-2')}</th>
          <th>{t('compareTable.table-title-3')}</th>
          <th>{t('compareTable.table-title-4')}</th>
          <th>{t('compareTable.table-title-5')}</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>{t('compareTable.table-td-1-1')}</td>
          <td>300</td>
          <td>4.500</td>
          <td>20.000</td>
          <td>{t('compareTable.contactUs')}</td>
        </tr>  
        <tr>
          <td>{t('compareTable.table-td-1-2')}</td>
          <td>1</td>
          <td>2</td>
          <td>5</td>
          <td>10-30</td>
        </tr>     
        <tr>
          <td>{t('compareTable.table-td-1-3')}</td>
          <td>1 {t('compareTable.collection')}</td>
          <td>2 {t('compareTable.collections')}</td>
          <td>5 {t('compareTable.collections')}</td>
          <td>{t('compareTable.unlimited-collections')}</td>
        </tr>
        <tr>
          <td>{t('compareTable.table-td-1-4')}</td>
          <td>{t('compareTable.support-1')}</td>
          <td>{t('compareTable.support-2')}</td>
          <td>24/7</td>
          <td>24/7</td>
        </tr>
        <tr>
          <td>{t('compareTable.table-td-1-5')}</td>
          <td>-</td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>{t('compareTable.table-td-1-6')}</td>
          <td>-</td>
          <td>-</td>
          <td><i className="bi bi-check icono"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>{t('compareTable.table-td-1-7')}</td>
          <td>-</td>
          <td>-</td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>{t('compareTable.table-td-1-8')}</td>
          <td>-</td>
          <td>-</td>
          <td><i className="bi bi-check"></i></td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>{t('compareTable.table-td-1-9')}</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td><i className="bi bi-check"></i></td>
        </tr>
        <tr>
          <td>{t('compareTable.table-td-1-10')}</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>{t('compareTable.contactUs')}</td>
        </tr>
        <tr>
          <td>{t('compareTable.table-td-1-11')}</td>
          <td>{t('compareTable.free')}</td>
          <td>39,99€</td>
          <td>69,99€</td>
          <td>{t('compareTable.contactUs')}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </>
  );
};
