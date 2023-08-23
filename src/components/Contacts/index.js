import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import {} from "./styles.css"

function Contacts() {
const [contacts, setContacts] = useState([
  {
    fullname: "taner",
    phone_number: "159852"
  },
  {
    fullname: "ali",
    phone_number: "123123123"
  },
  {
    fullname: "osman",
    phone_number: "5555555"
  }
]);

useEffect (() => {
console.log(contacts)
},[contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;
