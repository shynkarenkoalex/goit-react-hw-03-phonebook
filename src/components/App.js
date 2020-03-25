import React, { Component } from "react";
import uuid from "uuid";
import Layout from "./Layout";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./FilterContact";

export default class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  handleAddContact = contactItem => {
    let isExist = this.state.contacts.find(
      item => item.name === contactItem.name
    );

    if (this.state.contacts.length > 0 && isExist) {
      alert(`contact with name ${contactItem.name} is allready exist`);
    } else {
      const contact = {
        id: uuid(),
        name: contactItem.name,
        number: contactItem.number
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact]
      }));
    }
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleRemoveContact = idConact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== idConact)
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter
            valueFilter={filter}
            onChangeFilter={this.handleChangeFilter}
          />
        )}
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.handleRemoveContact}
          ></ContactList>
        )}
      </Layout>
    );
  }
}
