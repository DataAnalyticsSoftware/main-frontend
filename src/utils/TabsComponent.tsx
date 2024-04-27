import React from 'react'
import { TabPanelProps } from '../modules/ContentComponent/components/Collections/components/CollectionList/types';

export const CustomTabPanel=(props: TabPanelProps)=> {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        style={{minHeight:'550px', borderRadius:10}}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>
            <p>{children}</p>
          </div>
        )}
      </div>
    );
  }
  export const customTabStyles={
    fontSize:16,
    fontFamily: "Poppins !important",
  }
