import React, { useContext, useState, useEffect } from 'react'
import '../SideMenuComponent/styles.module.scss'
import { DashboardContext } from '../../pages/DashboardPage/context/DashboardContext'
import { GenericContext } from '../../context/GenericContext'
import { IMenu } from './type'
import { List, ListItem, ListItemText } from '@mui/material'
import style from './styles.module.scss'
import { PrincipalIconDas } from '../../components/SvgDas'

export const SideMenuComponent = () => {

    const [menu, setMenu] = useState<IMenu[]>([])
    const { webDataNetsRequest, token } = useContext(GenericContext)
    const { setMenuSelected, menuSelected } = useContext(DashboardContext)

    useEffect(() => {
        webDataNetsRequest('api/menu')
            .then((response: IMenu[]) => {
                setMenu(response)
                setMenuSelected(response[0])
            })
    }, [])
    
    const styles = {
        width: '100%',
        maxWidth: 360,
        bgcolor: '#111827',
      };

    return (
            <div style={{backgroundColor: '#111827', height: '100%', width: '222px', padding: '16px'}} className="col-3 position-fixed " id="sticky-sidebar">
                <div style={{color: 'white'}} className='mt-4 ml-2 mr-3 mb-5'>
                    <div style={{width: '74px', height: '90px'}}>
                        <PrincipalIconDas/>
                    </div>
                </div>
                <hr style={{backgroundColor: '#F6F6F6', opacity:'10%'}}></hr>
                    <List sx={styles} component="nav" aria-label="mailbox folders">
                        {menu?.map((value: IMenu, index: number) =>
                            <ListItem key={index} button className={`${style.list_item} ${value.route === menuSelected.route ? style.list_item_selected : ''}`} onClick={() => setMenuSelected(value)}>
                                <i className={`bi bi-${value.icon}  ${value.route === menuSelected.route ? style.list_text_selected : style.list_text}`} style={{ marginRight: '8px'}} ></i>
                                <ListItemText primary={value.name} className={value.route === menuSelected.route ? style.list_text_selected : style.list_text} />
                            </ListItem>)}
                    </List>                
            </div>
    )
}