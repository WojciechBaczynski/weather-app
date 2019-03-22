import React from 'react';

const form = props => (
    <form>
        <input
            type="text"
            value={props.value}
            placeholder="Wpisz miasto"
            onChange={props.inputChange} />
        <button>Wyszukaj miasta</button>
    </form>
);

export default form;
