import React, { useState, useEffect } from 'react';

function ApiComponents() {
  const [covidData, setCovidData] = useState([]);
  const limit = 30; // Set the limit to 30

  useEffect(() => {
    fetch('https://covid19-api.org/api/status')
      .then((response) => response.json())
      .then((data) => setCovidData(data.slice(0, limit))) // Limit the data to the top 30
      .catch((error) => console.error('Error fetching COVID-19 data:', error));
  }, []);

  return (
    <container>
        <div>
      {covidData.length > 0 ? (
        <div>
          <h1>Top 30 COVID-19 Data</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Country</th>
                <th>Cases</th>
                <th>Deaths</th>[]
                <th>Recovered</th>
              </tr>
            </thead>
            <tbody>
              {covidData.map((data, index) => (
                <tr key={index}>
                  <td>{data.country}</td>
                  <td>{data.cases}</td>
                  <td>{data.deaths}</td>
                  <td>{data.recovered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading COVID-19 data...</p>
      )}
    </div>
    </container>
  );
}

export default ApiComponents;
