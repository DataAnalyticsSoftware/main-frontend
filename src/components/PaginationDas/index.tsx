import { Button, TablePaginationProps } from '@mui/material';
import { useGridApiContext, useGridSelector, gridPageCountSelector, GridPagination } from '@mui/x-data-grid';
import React from 'react'
import MuiPagination from '@mui/material/Pagination';

interface IPaginationDas {
    cancelButton?: boolean
}

export const PaginationDas = ({ page, onPageChange, className }: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'> & IPaginationDas): JSX.Element => {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
      
    return (
        <MuiPagination
            variant="outlined"
            shape="rounded"
            className={className}
            count={pageCount}
            page={page + 1}
                onChange={(event, newPage) => {
                onPageChange(event as any, newPage - 1);
            }}
        />
    );
}

export const CustomPaginationDas = (props: any): JSX.Element => (
    <>
        <div style={{width: '100%', padding: '24px'}}>
            {props?.cancelButton && <Button onClick={() => props?.closeModal && props?.closeModal()} style={{width: '134px', backgroundColor: '#ECECEC', borderRadius: '8px', color: 'black', textTransform: 'none', height: '47px'}}>Cancel</Button>}
        </div>
        <GridPagination sx={{width: '100%', paddingRight: '24px !important', paddingTop: props?.cancelButton ? '' : '24px !important', paddingBottom: props?.cancelButton ? '' : '24px !important'}} ActionsComponent={PaginationDas} {...props} /> 
    </>)