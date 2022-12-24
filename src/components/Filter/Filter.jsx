import css from './Filter.module.css'
import {PropTypes} from "prop-types"

export const Filter = ({ value, onChange }) => {
    return (
        <div className={css.filter}>
            <p className={css.title}>Find Contacts by name</p>
            <input className={css.input} type="text" value={value} onChange={onChange} />
        </div>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}