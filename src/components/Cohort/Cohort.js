import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';
import { Component } from 'react'

const Cohort = (props) => {
  const { name } = props

  const peopleCards = name.map(person => {
    return (
      <Person
        name={person.name}
        photo={person.photo}
        quote={person.quote}
        superlative={person.superlative}
        />
      )
  })

  return (
    <div className='ideas-container'>
      {peopleCards}
    </div>
  )
}

export default Cohort;
