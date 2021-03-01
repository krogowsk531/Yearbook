import React from 'react';
import { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      photo: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
        />
        <input
          type='text'
          placeholder='quote'
          name='quote'
          value={this.state.quote}
        />
        <input
          type='text'
          placeholder='superlative'
          name='superlative'
          value={this.state.superlative}
        />
        <input
          type='text'
          placeholder='photo'
          name='photo'
          value={this.state.photo}
        />
        <button>SUBMIT</button>
      </form>
    )
  }
}


export default Form;
