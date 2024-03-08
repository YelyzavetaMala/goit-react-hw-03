import ContactForm from './Components/ContactForm';
import SearchBox from './Components/SearchBox';
import ContactList from './Components/ContactList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from './contacts.json';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    return savedContacts || initialContacts;
  });

  const [search, setSearch] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { ...newContact, id: nanoid() }];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={handleSearch} />
      <ContactList contacts={contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))} onDelete={deleteContact} />
    </div>
  );
}
