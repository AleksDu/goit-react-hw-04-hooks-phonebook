import React, { useState } from "react";
import PropTypes from "prop-types";
// import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import s from "./ContactForm.module.css";

const ContactForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // Следит за инпутом
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  // Метод на отправке формы. Формирует из стейта контакт и передает во внешний метод
  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    onSubmit(newContact);
    resetForm();
  };

  // const comparableElement = contacts.some(
  //   (element) => element.name.toLowerCase() === name.toLowerCase()
  // );

  // if (comparableElement) {
  //   toast.info(`${name} is already in contacts`);

  //   return;
  // }
  // toast.info(`${name} is already in contacts`);
  // console.log(name);

  // const normalizedName = name.toLowerCase();

  // //  Проверка на дубликат по имени
  // const nameInContacts = contacts.find(
  //   (contact) => contact.name === normalizedName
  // );

  // //   // Проверка на дубликат по номеру
  // const numberInContacts = contacts.find(
  //   (contact) => contact.number === number
  // );
  // // Отправка имени и номера после проверки (в проп-метод из контейнера)
  // if (!nameInContacts && !numberInContacts) {
  //   onSubmit(newContact);
  //   resetForm();

  //   return;
  // }

  // // Сброс полей формы (после отправки)
  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="input to you name"
          className={s.input}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          aria-label="input to you phone number"
          className={s.input}
          value={number}
          onChange={handleChange}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
      <div className={s.button__wrapper}>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
