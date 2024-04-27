import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { ButtonsEmailConnections } from './components/ButtonsEmailConnections'
import { CustomTabPanel, customTabStyles } from '../../../../utils/TabsComponent'
import { Tabs, Tab } from '@mui/material'
import { ButtonsConnections } from './components/ButtonsConnections'

export const ConnectionsComponent=()=> {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', marginBottom: '24px', paddingTop:'26px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px', width: '100%'}}>
                <span className={styles.title}> Connections</span>
                <span className={styles.sub_title}>Connect your data from CRM in one click</span>
                <div style={{padding: '25px', borderRadius: '14.5px', backgroundColor: 'white', boxShadow: '0px 4px 50px 0px rgba(0, 0, 0, 0.10)'}}>
                  <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="CRM's Stores" sx={customTabStyles}/>
                    <Tab label="CRM's Email Marketing " sx={customTabStyles}/>
                    <Tab label="Other CRM's" sx={customTabStyles}/>
                  </Tabs>
                  <CustomTabPanel value={value} index={0}>
                      <ButtonsConnections/>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                      <ButtonsEmailConnections/>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                      Other CRM's 
                  </CustomTabPanel>
                </div>
                
            </div>
        </div>
    </>
  )
}
