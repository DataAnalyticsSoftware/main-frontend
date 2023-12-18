import React, { useContext, useEffect, useState } from 'react';
import { CSVContextProvider } from './context/CSVContext';
import { CSVContainer } from './components/CSVContainer';

interface CSVData {
  [key: string]: string;
}

export const CSVUpload: React.FC = () => {

  return (
    <CSVContextProvider >
      <div style={{height:'70vh', backgroundColor:'white', borderRadius:'11px'}} className="container-fluid mt-4">
        <CSVContainer/>
      </div>
    </CSVContextProvider>
  )
}

