import { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';
import Item from './Item';
import Table from './Table';
import Reset from './Reset';
import Clear from './Clear';
import TableSet from './Table';

function GetList() {
    // console.log('testing getList');
    const [itemList, setItemList] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity ] = useState('');
    const [itemUnit, setItemUnit] = useState('');

    const fetchShoppingList = () => {
        axios.get('/list').then((response) => {
            setItemList(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        });
    }

    useEffect(() => {
        fetchShoppingList();
    }, []);

    return (
        <div id='list'>
            <Item 
                fetchShoppingList={fetchShoppingList}
                itemName={itemName}
                setItemName={setItemName}
                setItemQuantity={setItemQuantity}
                itemQuantity={itemQuantity}
                itemUnit={itemUnit}
                setItemUnit={setItemUnit}
            />
            <h2>The Shopping List</h2>
            <TableSet 
                itemList={itemList}
                fetchShoppingList={fetchShoppingList}
            />
            <div id="buttons">
                <Reset 
                    fetchShoppingList={fetchShoppingList}
                />
                <Clear 
                    fetchShoppingList={fetchShoppingList}
                />
            </div>
        </div>
    )
};

export default GetList;