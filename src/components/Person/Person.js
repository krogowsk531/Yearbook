import React from 'react';
import './Person.css';
import { Component } from 'react';

const Person = ({ id, name, photo, quote, superlative, removeStudent }) => {
  return (
    <div className='card'>
      <img src={photo} />
      <h3>{name}</h3>
      <h4>{quote}</h4>
      <h5>{superlative}</h5>
      <button>Edit Info</button>
      <button onClick={() => removeStudent(id)}>Delete Student</button>
    </div>
  )
}

export default Person;
