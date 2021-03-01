import React from 'react';
import './Person.css';
import { Component } from 'react';

const Person = ({ name, photo, quote, superlative }) => {
  return (
    <div className='card'>
      <img src={photo} />
      <h3>{name}</h3>
      <h4>{quote}</h4>
      <h5>{superlative}</h5>
    </div>
  )
}

export default Person;
