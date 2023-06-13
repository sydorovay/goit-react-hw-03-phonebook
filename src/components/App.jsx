import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
 import { FcSearch } from 'react-icons/fc';

const App = () => {
  const state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    numberFilter: '',
  };

  const [contacts, setContacts] = useState(state.contacts);
  const [filter, setFilter] = useState(state.filter);
  const [numberFilter, setNumberFilter] = useState(state.numberFilter);

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

  const handleNumberFilterChange = e => {
    setNumberFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact => {
    const nameMatch = contact.name.toLowerCase().includes(filter.toLowerCase());
    const numberMatch = contact.number.includes(numberFilter);
    return nameMatch && numberMatch;
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>
        <FcSearch size={24} /> Contacts{' '}
      </h2>

      <Filter
        filter={filter}
        number={numberFilter}
        onChange={handleFilterChange}
        onNumberChange={handleNumberFilterChange}
      />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;