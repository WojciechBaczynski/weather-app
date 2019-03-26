import React from 'react';
import styles from './Form.module.css';

const form = props => (
    <form className={styles.Form} onSubmit={props.submitCity}>
        <input
            type="text"
            value={props.value}
            placeholder="Wpisz miasto"
            onChange={props.inputChange} />
        <button>Wyszukaj miasta</button>
    </form>
);

export default form;
