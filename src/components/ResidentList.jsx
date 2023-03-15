import React from 'react';
import ResidentInfo from './ResidentInfo';
import './Location.css';

const ResidentList = ({ residents }) => {
  return (
    <section className="container__list">
      {residents.map((resident) => (
        <ResidentInfo key={resident} urlResident={resident} />
      ))}
    </section>
  );
};

export default ResidentList;
