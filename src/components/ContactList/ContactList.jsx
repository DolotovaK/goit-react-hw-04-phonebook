import { ContactItem } from "components/ContactItem/ContactItem"
import css from './ContactList.module.css'
import {PropTypes} from "prop-types"


export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id} className={css.contact}>
                    <ContactItem contact={contact} onDelete={onDeleteContact} />
                </li>
            ))}
        </ul>
    )
}   

ContactList.propTypes = {
    contacts: PropTypes.shape({}),
    onDelete: PropTypes.func,
}