import React from 'react';
import useFetch from '../hooks/useFetch';

const tableStyle = {
  fontFamily: 'arial, sans-serif',
  borderCollapse: 'collapse',
  width: '100%',
};

const tableData = {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: ' 8px',
};

const Rockets = () => {
  const { data, loading } = useFetch('https://api.spacexdata.com/v3/rockets');

  return (
    <div>
      <h3> Rockets </h3>
      {!loading ? (
        data.map((rocket) => (
          <table key={rocket.id} style={tableStyle}>
            <tbody>
              <tr>
                <th style={tableData}>Country</th>
                <th style={tableData}>Name</th>
                <th style={tableData}>Weigth</th>
                <th style={tableData}>Cost</th>
              </tr>
              <tr>
                <td style={tableData}>{rocket.country}</td>
                <td style={tableData}>{rocket.rocket_name}</td>
                <td style={tableData}>{rocket.mass.kg}</td>
                <td style={tableData}>{rocket.cost_per_launch}</td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <h3> Loading......</h3>
      )}
    </div>
  );
};

export default Rockets;
