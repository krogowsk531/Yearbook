import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';
import { Component } from 'react'

const Cohort = ({name}) => {

  return (
    <div className='ideas-container'>
      <Person />
      <Person />
      <Person />
    </div>
  )
}

export default Cohort;
