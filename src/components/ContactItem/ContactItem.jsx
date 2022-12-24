import css from './ContactItem.module.css'; 
import {PropTypes} from "prop-types"

export const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <>
      <p className={css.name}>{name}: {number}</p>
      <button
        type="button"
        className={css.button}
        onClick={() => { onDelete(id) }}
      >
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
}