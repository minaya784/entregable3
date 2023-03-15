import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResidentsInfo.css';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);

      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);

  const bstatus = () => {
    if (residentInfo.status === 'Alive') {
      return 'chartreuse';
    } else if (residentInfo.status === 'Dead') {
      return 'red';
    } else {
      return 'grey';
    }
  };

  return (
    <>
      <div className="residentInfo__initial">
        {residentInfo && (
          <article className="residenInfo__container-principal">
            <div className="residenInfo__container">
              <div className="conatiner__image">
                <img
                  src={residentInfo.image}
                  alt={residentInfo.name}
                  className="residentInfo__img"
                />
                <li className="status">
                  <span> </span>{' '}
                  <div className="status__container" style={{ background: bstatus() }} />{' '}
                  {residentInfo.status}{' '}
                </li>
              </div>
              <h3>{residentInfo.name}</h3>
              <div className="residentInfo__text-container">
                <ul className="residentInfo__text">
                  <li>
                    <span>Species </span> {residentInfo.specie}{' '}
                  </li>

                  <li>
                    <span>Origin </span> {residentInfo.origin.name}{' '}
                  </li>
                  <li>
                    <span>Times appear </span> {residentInfo.episode.length}{' '}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        )}
        {/* <div className="container__ellipse">
          <img src={top} alt="" className="ellipse__top" />
        </div> */}
      </div>
    </>
  );
};

export default ResidentInfo;
