import React, { useState, useEffect, useContext } from 'react'
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DescriptionIcon from '@mui/icons-material/Description';
import { GenericContext } from '../../../../../../../../context/GenericContext';
import { IDataCollection, IDataInformation } from '../../../../../Collections/components/CollectionList/type';

export const SelectData = ({ handleChange }: any): JSX.Element => {
    const { webDataNetsRequest } = useContext(GenericContext)
    const [open, setOpen] = useState<boolean[]>([false])
    const [ collection, setCollection ] = useState<IDataCollection[]>([])

    useEffect(() => {
        webDataNetsRequest('api/collection')
            .then((res) => {
                setOpen(new Array(res.length).fill(false))
                setCollection(res)
            })
    }, [])
    
    const handleOpen = (index: number) => {
        let copyOpen = [...open]
        copyOpen[index] = !copyOpen[index]
        setOpen(copyOpen)
    }

    return (
        <>
        <List>
                {collection?.map((value: IDataCollection, index: number) => <>
                    <ListItemButton onClick={() => handleOpen(index)} >
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={value?.name} secondary={value?.description} />
                        {open[index] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[index] || false} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            { value.data_information.map((value: IDataInformation) =>(
                                <ListItemButton sx={{ pl: 4 }} onClick={() => handleChange(value)}>
                                    <ListItemIcon>
                                        <DescriptionIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={value.name} />
                                </ListItemButton>))
                            }
                        </List>
                    </Collapse>
                </>)}
            </List>
        </>
    )
}