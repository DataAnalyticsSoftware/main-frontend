import React, { useContext, useEffect, useState } from 'react';
import { CSVContextProvider } from './context/CSVContext';
import { CSVContainer } from './components/CSVContainer';

interface CSVData {
  [key: string]: string;
}

export const CSVUpload: React.FC = () => {

  return (
    <CSVContextProvider >
      <div className="container mt-4">
        <CSVContainer/>
      </div>
    </CSVContextProvider>
  )
}

