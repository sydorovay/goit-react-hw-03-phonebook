import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FcSearch } from 'react-icons/fc';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';

const App = () => {
  const state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    numberFilter: '',
  };

  const [contacts, setContacts] = useState(state.contacts);
  const [filter, setFilter] = useState(state.filter);

  const addContact = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact => {
    const nameMatch = contact.name.toLowerCase().includes(filter.toLowerCase());
    return nameMatch;
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>
        <FcSearch size={24} /> Contacts{' '}
      </h2>

      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
