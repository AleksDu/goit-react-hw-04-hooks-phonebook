import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

import s from "./App.module.css";

const localStorageContactsKey = "contacts";
const App = () => {
  // contacts: [
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ];
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const currentContacts = JSON.parse(
      localStorage.getItem(localStorageContactsKey)
    );
    // console.log(localStorageContactsKey);

    if (currentContacts) {
      setContacts(currentContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageContactsKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    const comparableElement = contacts.some(
      (element) => element.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (comparableElement) {
      alert("This already in contacts");

      return;
    }

    setContacts([...contacts, newContact]);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDelete = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(filteredContacts);
  };

  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} contacts={contacts} />
      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={contacts} onDeleteContact={handleDelete} />
    </Container>
  );
};

export default App;

// const contacts = localStorage.getItem("contacts");
// const parsedContacts = JSON.parse(contacts);
// if (parsedContacts) {
//   this.setState({ contacts: parsedContacts });
// }

// componentDidUpdate(prevProps, prevState) {
//   const nextContacts = this.state.contacts;
//   const prevContacts = prevState.contacts;
//   if (nextContacts !== prevContacts) {
//     localStorage.setItem("contacts", JSON.stringify(nextContacts));
//   }
// }

// // Добавляет контакт
// addContact = (data) => {
//   const normalizedName = data.name;
//   // .toLowerCase();
//   const uniqId = Date.now().toString();

//   // Создает новый контакт с айди из даты
//   const newContact = {
//     id: uniqId,
//     name: normalizedName,
//     number: data.number,
//   };
//   // Проверка на дубликат
//   const duplicateName = this.state.contacts.find(
//     (contact) => contact.name === newContact.name
//   );

//   if (duplicateName) {
//     alert(`${newContact.name} is already on contacts`);
//     return;
//   }

//   this.setState(({ contacts }) => ({
//     contacts: [newContact, ...contacts],
//   }));
// };

// // Следит за полем фильтрации и пишет в стейт
// changeFilter = (event) => {
//   this.setState({ filter: event.currentTarget.value });
// };

// // Фильтрует и возвращает результат фильтра
// filterContacts = () => {
//   const { contacts, filter } = this.state;

//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// // Удаляет контакт
// deleteContact = (id) => {
//   const answer = window.confirm("Do you want to delete?");
//   if (answer) {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== id),
//     }));
//   }
// };
