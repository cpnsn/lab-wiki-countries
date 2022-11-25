import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesDetails from './components/CountriesDetails';
//import coutriesJson from './countries.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountry(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (countries.length === 0) {
    return <div>Loading </div>;
  }
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        {/* <!-- Bootstrap row wrapper div --> */}
        <div className="row">
          {/* <!-- Countries List (Bootstrap column) --> */}
          <CountriesList countries={countries} />

          <Routes>
            <Route
              path="/:id"
              element={<CountriesDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
