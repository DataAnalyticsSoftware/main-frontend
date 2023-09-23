import React, { useState } from 'react';
import Papa, { ParseResult } from 'papaparse';

interface CSVData {
  [key: string]: string;
}

const CSVViewer: React.FC = () => {
  const [csvData, setCsvData] = useState<CSVData[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      Papa.parse(file, {
        complete: (result: ParseResult<CSVData>) => {
          setCsvData(result.data);
        },
        header: true,
        dynamicTyping: true,
      });
    }
  };

  return (
  <div className="container mt-4">
  <div className="form-group">
    <input type="file" className="form-control-file" accept=".csv" onChange={handleFileChange} />
  </div>
  
  {csvData.length > 0 && (
    <table className="table table-striped table-responsive"  style={{height:'500px'}}>
      <thead>
        <tr>
          {Object.keys(csvData[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {csvData.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

  );
};

export default CSVViewer;
