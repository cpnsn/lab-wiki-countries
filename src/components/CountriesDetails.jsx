import React from 'react';
import { useParams } from 'react-router-dom';

const CountriesDetails = ({ countries }) => {
  const params = useParams();
  const id = params.id;

  console.log(countries);

  const countryAlpha3 = countries.find((elem) =>
    elem.alpha3Code === id ? elem : null
  );

  return (
    <div className="col-7">
      <h1>{countryAlpha3.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryAlpha3.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryAlpha3.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountriesDetails;
