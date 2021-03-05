import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';
import { Component } from 'react'

const Cohort = ({persons, removeStudent}) => {

  console.log('Persons', persons)
  console.log('REMOVE', removeStudent)

  const peopleCards = persons.map(person => {
    return (
      <Person
        id={person.id}
        name={person.name}
        photo={person.photo}
        quote={person.quote}
        superlative={person.superlative}
        removeStudent={removeStudent}
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
