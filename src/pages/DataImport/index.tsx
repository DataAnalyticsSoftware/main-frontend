import React, { useCallback } from 'react';
import CSVViewer from './Paparse';

export const DataImport = (props: any) => {
  const handleFileDrop = useCallback((file: File) => {
  }, []);

  return (
    <div>
      <CSVViewer onFileDrop={handleFileDrop} />
    </div>
  );
};
