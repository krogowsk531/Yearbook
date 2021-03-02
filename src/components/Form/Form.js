import React from 'react';
import { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      photo: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitStudent = (event) => {
    event.preventDefault()
    const name = this.state.name
    const quote = this.state.quote
    const superlative = this.state.superlative
    const photo = this.state.photo
    const aNewStudent = { name, quote, superlative, photo }
    this.props.addStudent(aNewStudent)
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='quote'
          name='quote'
          value={this.state.quote}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='superlative'
          name='superlative'
          value={this.state.superlative}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='photo'
          name='photo'
          value={this.state.photo}
          onChange={event => this.handleChange(event)}
        />
        <button type='submit' onClick={this.submitStudent}>SUBMIT</button>
      </form>
    )
  }
}


export default Form;
