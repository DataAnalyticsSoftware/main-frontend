import React, { useContext } from "react"
import { DashboardContext } from "../../../../pages/DashboardPage/context/DashboardContext"
import { ButtonDas } from "../../../../components/ButtonDas"
import styles from './styles.module.scss'
import { Box, Grid } from "@mui/material"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const PricingTableComponent = (props:any) => {
    const { pricing } = useContext(DashboardContext)
    
    return (
        <div className="container-fluid" style={{display:'flex', textAlign:'center'}}  >
            {pricing?.map((value:any)=>{
                return(
                    <div className="shadow" style={{backgroundColor:'white', width:'383px',minHeight:'583px', marginRight:'24px', borderRadius:'15px'}}>

                        <div style={{backgroundColor:'#111827', height:'43px', color:'white',marginLeft:'auto',marginRight:'auto',width:'50%', borderRadius:'0px 0px 20px 20px'}}>
                            <h4 className="my-0 font-weight-normal pt-2" style={{fontWeight:'500', fontSize:'18px', lineHeight:'24px'}}>{value.name}</h4>                       
                        </div> 
                        <p style={{color:'#6F7479', marginTop:'24px'}}>Starting at</p>
                        <Box>
                            <Grid item xs={4}>
                                <h1 className="card-title pricing-card-title mt-0" style={{color:'#0E0E0E', fontWeight:'700'}}>${value.price} <small  style={{color:'#6E6E6E',fontWeight:'500'}} className="text-muted">/ month</small></h1>
                            </Grid>
                            <Grid item xs={4} style={{minHeight:'300px'}}>
                                <div style={{ padding: '26px 26px 26px 26px', borderRadius: '20px', textAlign:'left' }}>
                                    <p style={{fontWeight:'600', fontSize:'16px',lineHeight:'24px'}} key={value.name}>Features Included:</p>
                                    <ul key={value.name} className="list-unstyled mt-3" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                                        {value?.plusInfo?.map(((value:any) => {
                                            return (
                                                <div style={{display:'flex', marginBottom:'6px'}}>
                                                    <AccountBalanceWalletIcon style={{color:'#4F46E5'}}/>
                                                    <li style={{fontWeight:'600', fontSize:'14px',lineHeight:'24px', paddingLeft:'8px'}} >{value.replace(',', ',\n')}</li>
                                                </div>
                                                
                                            )
                                        }))}
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={4}>                    
                                <div  style={{padding:'24px'}} >
                                    <ButtonDas pricing={true} variant='outlined' style={{width: '100%', height: '60px',borderRadius:'0px !Important'}} text={'Choose Plan'} />
                                </div>
                            </Grid>
                        </Box>   
                    </div>    
                )
            })}
        </div>
    )
}