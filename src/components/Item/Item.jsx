import axios from 'axios';
import React, { useState, useEffect } from 'react';
import List from '../List/List.jsx';

const submitForm = (event) => {
    // event.preventDefault();

    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity ] = useState('');
    const [itemUnit, setItemUnit] = useState('');
    axios.post('/list', {
        name: itemName,
        quantity: itemQuantity,
        unit: itemUnit
    }).then((response) => {
        setItemName('');
        setItemQuantity('');
        setItemUnit('');
        getList();
    }).catch((error) => {
        console.log(`Error in Post ${error}`);
        alert('Something went wrong');
    });

    return (
        <form onSubmit={submitForm}>
            Name: <input type="text" value={itemName}
            onChange={(e) => setItemName(e.target.value)}/>
            <br />
            Quantity: <input type="number" value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)} />
            Unit: <input type="text" value={itemUnit}
            onChange={(e) => setItemUnit(e.target.value)}/>
            <input type="submit"/>
        </form>

    )
};

export default submitForm;