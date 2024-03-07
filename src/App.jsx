import ContactForm from './Components/ContactForm'
import SearchBox from './Components/SearchBox'
import ContactList from './Components/ContactList'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from './contacts.json' 
import './App.css'

export default function App() {
  
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState('');

   useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

   const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onChange={setSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
      
    
  )
}

