import React from 'react';
import './Location.css';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className="container__initial">
      <div className="location__container">
        <h2>{name} </h2>
        <ul className="list_container">
          <li>
            <span>Type: </span>
            {type}
          </li>
          <li>
            <span>Dimension: </span>
            {dimension}
          </li>
          <li>
            <span>Poblation: </span>
            {residents.length}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Location;
