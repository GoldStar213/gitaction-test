import React, { useState, useEffect } from 'react';

const DataDisplay: React.FC = () => {
  const [jsonData, setJsonData] = useState<any>(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>JSON Data</h1>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default DataDisplay;