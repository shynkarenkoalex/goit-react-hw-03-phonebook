import React from "react";
import ContactItem from "../ContactItem";
import "./ContactList.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        nameItem={name}
        numberItem={number}
        onRemove={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired
};

export default ContactList;
