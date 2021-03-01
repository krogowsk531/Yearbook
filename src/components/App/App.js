import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import Person from '../Person/Person'
import Form from '../Form/Form'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
        <h2>Staff</h2>
        <Cohort name={this.state.staff} />
        <h2>Students</h2>
        <Cohort name={this.state.students} />
        <h2>Add a Student</h2>
        <Form />
      </div>
    );
  }
}

export default App;
