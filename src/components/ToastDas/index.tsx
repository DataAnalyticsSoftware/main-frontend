import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export const ToastDas = ({open, message, onClose}):JSX.Element => {

    return <Snackbar anchorOrigin={{horizontal: 'center', vertical: 'top'}} autoHideDuration={6000} open={open} onClose={onClose}>
                <Alert severity="success" sx={{ width: '100%' }} onClose={onClose}>
                    {message}
                </Alert>
            </Snackbar>
}