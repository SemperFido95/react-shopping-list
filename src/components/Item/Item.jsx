import axios from 'axios';
import React, { useState } from 'react';


const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity ] = useState('');
    const [itemUnit, setItemUnit] = useState('');

    const submitForm = (event) => {
        event.preventDefault();

        axios.post('/list', {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit
        }).then((response) => {
            setItemName('');
            setItemQuantity('');
            setItemUnit('');
            console.log('testing post');
        }).catch((error) => {
            console.log(`Error in Post ${error}`);
            alert('Something went wrong');
        });
    }



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

export default AddItem;