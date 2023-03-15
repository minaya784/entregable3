import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getRandomNumber } from './utils/getRandomNumber';
import Location from './components/Location';
import ResidentList from './components/ResidentList';
import '../src/components/App.css';
import imageRick from './img/RyM.png';
import imageBack from './img/rymBack.png';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [idLocationValue, setIdLocationValue] = useState('');

  const getIdLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    try {
      const res = await axios.get(url);

      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;

    if (/^\d{0,3}$/.test(newValue)) setIdLocationValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idLocationValue) loadLocationInfo(idLocationValue);
    else loadLocationInfo(getIdLocationRandom());
  };

  useEffect(() => {
    loadLocationInfo(getIdLocationRandom());
  }, []);

  return (
    <div>
      <header className="container__header">
        <div className="container__logo-img">
          <img src={imageRick} alt="Logo_Rick" className="container__logo" />
          <img src={imageBack} alt="" className="container__shadows" />
        </div>
        <form onSubmit={handleSubmit} className="container__form">
          <input
            type="search"
            name="id-location"
            value={idLocationValue}
            onChange={idLocationHandleChange}
            placeholder="Type a number between 1 and 126"
            className="search__input-initial"
          ></input>
          <input type="submit" value="Search" className="search__input"></input>
        </form>
        <h2 className="container__welcome">¡Wellcome to the crazy universe!</h2>
      </header>

      {locationInfo && (
        <>
          <Location {...locationInfo} />
          {locationInfo && <ResidentList residents={locationInfo.residents} />}
        </>
      )}
    </div>
  );
};

export default App;
