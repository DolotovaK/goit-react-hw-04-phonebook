import { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './Form.module.css'; 


export function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactId = nanoid();

function handleInputContact (evt) {
  evt.preventDefault();
  const { name, value } = evt.currentTarget;
    
  switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break;
      default:
        return;
    }
  };
  
  function handleSubmitAddContact(evt) {
    evt.preventDefault()
    const { name, number } = evt.target.elements;
    onSubmit(name.value, number.value);
    resetForm();
    };

  function resetForm() {
    setName('');
    setNumber('');
  }

return ( 
            <form onSubmit={handleSubmitAddContact} className={css.form}>
           <label htmlFor={contactId} >
            <p className={css.label}>Name</p>
              <input
                className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={handleInputContact}
              id={contactId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </label>
          <label htmlFor={contactId}>
            <p className={css.label}>Number</p>
              <input
                className={css.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleInputContact}
              id={contactId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
          </label>
          
          <button type='submit' className={css.button}>Add contact</button>
       </form>
        );


}


// export class Form extends Component{
//     state = {
//         name: '',
//         number: '',
//     };

//     contactId = nanoid();

//     handleInputContact = evt => {
//         evt.preventDefault();
//         const { name, value } = evt.currentTarget;
    
//         this.setState({ [name]: value });
//     // console.log(evt);
//       };
    
//     handleSubmitAddContact = evt => {
//         evt.preventDefault()
//         // console.log(this.state)
//       const { name, number } = evt.target.elements;

//       this.props.onSubmit(name.value, number.value);
//       this.resetForm();
//     };

//     resetForm = () => {
//       this.setState({ name: '', number: '' });
//     };

//     render() {
//         return ( 
//             <form onSubmit={this.handleSubmitAddContact} className={css.form}>
//            <label htmlFor={this.contactId} >
//             <p className={css.label}>Name</p>
//               <input
//                 className={css.input}
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleInputContact}
//               id={this.contactId}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             />
//           </label>
//           <label htmlFor={this.contactId}>
//             <p className={css.label}>Number</p>
//               <input
//                 className={css.input}
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleInputContact}
//               id={this.contactId}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             />
//           </label>
          
//           <button type='submit' className={css.button}>Add contact</button>
//        </form>
//         );
//     }
// }