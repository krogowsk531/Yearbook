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

  addStudent = (newStudent) => {
    this.setState({students: this.state.students.concat(newStudent)})
  }

  removeStudent = (id) => {
    console.log("REMOVE STUDENT", id)
    const filteredStudents = this.state.students.filter(student => student.id != id);
    this.setState({ students: filteredStudents})
    const filteredStaff = this.state.staff.filter(staff => staff.id != id);
    this.setState({ staff: filteredStaff})
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
        <h2>Staff</h2>
        <Cohort persons={this.state.staff} removeStudent={this.removeStudent}/>
        <h2>Students</h2>
        <Cohort persons={this.state.students} removeStudent={this.removeStudent}/>
        <h2>Add a Student</h2>
        <Form addStudent={this.addStudent} />
      </div>
    );
  }
}

export default App;
