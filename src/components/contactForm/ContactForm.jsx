import React, { useState } from 'react';
import PropTypes from 'prop-types'
import styles from './ContactForm.module.css';
import { FcBusinessContact, FcCellPhone } from 'react-icons/fc';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label className={styles.inputLabel}>
          <FcBusinessContact size={24} />
          Name:
          <input
            className={styles.inputField}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label className={styles.inputLabel}>
          <FcCellPhone size={24} />
          Number:
          <input
            className={styles.inputField}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <br />
        <button className={styles.submitButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};


