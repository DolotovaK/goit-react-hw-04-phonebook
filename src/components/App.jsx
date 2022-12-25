import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid'
import { ContactList } from './ContactList/ContactList';


const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const localStorageContacts = JSON.parse(window.localStorage.getItem("contacts"))

export function App() {
  const [contacts, setContacts] = useState(localStorageContacts ?? initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  
  function onChangeFilter(evt) {
      const { value } = evt.currentTarget;
      setFilter({ filter: value });
    };
  
  function onGetFilteredContacts () {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  function addContact (name, number){
   const isExist = contacts.find(contact => {
      return contact.name === name;
   });
    
    if (isExist) {
      return alert(`${name} is already in phonebook.`);
    }

    setContacts(contacts => [...contacts, {name, id: nanoid(), number}]
    );
  };

  function deleteContact (contactId) {
    setContacts(
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList contacts={onGetFilteredContacts()} onDeleteContact={deleteContact} />
      </>
    );
}

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem("contacts"))
//     if (parsedContacts) {
//       this.setState({contacts: parsedContacts})
//     }
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
//     }
//   };

//   componentWillUnmount() { };

//   onChangeFilter = evt => {
//     const { value } = evt.currentTarget;
//     this.setState({ filter: value });
//   };

//   onGetFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter))
//   }

//   addContact = (name, number)=> {
//    const isExist = this.state.contacts.find(contact => {
//       return contact.name === name;
//    });
    
//     if (isExist) {
//       return alert(`${name} is already in contacts.`);
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, {name, id: nanoid(), number}]
//     }));

//   };


//   // formSubmitHandler = data => {
//   //   console.log(data);
//   // };

//   deleteContact = (contactId) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//     }));
//   };

  

//   render() {
//     const { filter } = this.state
//     const filteredContacts = this.onGetFilteredContacts();
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.onChangeFilter} />
//         <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
//       </>
//     );
//   }
// }


