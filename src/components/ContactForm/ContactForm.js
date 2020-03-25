import React, { Component } from "react";
import "./ContactForm.css";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  name: "",
  number: ""
};

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired
  };

  state = { ...INITIAL_STATE };

  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    if(this.state.name.trim().length > 0) {
      this.props.onAddContact({ ...this.state })
    }
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form className="ContactForm" onSubmit={this.handleSubmit}>
        <label className="ContactForm-label">
          Name
          <input
            className="ContactForm-input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className="ContactForm-label">
          Number
          <input
            className="ContactForm-input"
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className="ContactForm-button">
          Add contact
        </button>
      </form>
    );
  }
}
