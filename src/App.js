import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";



function App() {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then(response => response.data.sort(function (a, b) {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    }))
    .then(sortedArray => setCountries(sortedArray))
    .catch(err => err);
  }, [])

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <NavBar/>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <CountriesList countryList={countries}/>
          <Routes>
            <Route path={"/countries/:countryCode"} element={<CountryDetails countryList={countries}/>}/>
            <Route path={"/error"} element={<ErrorPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;