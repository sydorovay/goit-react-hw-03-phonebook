import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={styles['contact-list']}>
        {contacts.map(contact => (
          <li className={styles['contact-list-item']} key={contact.id}>
            <span className={styles['contact-name']}>{contact.name}:</span>{' '}
            {contact.number}
            <button
              className={styles['delete-button']}
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
