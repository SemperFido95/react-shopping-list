import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getList() {
    let [itemList, setItemList] = useState([]);

    useEffect(() => {
        fetchShoppingList();
    }, []);
    
    const fetchShoppingList = () => {
        axios.get('/list').then((response) => {
            setItemList(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        })
    }

    return (
        <div>
            <h2>The Shopping List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Units</th>
                        <th>Purchased</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.unit}</td>
                                <td></td>
                                <td><button>Purchase</button></td>
                                <td><button>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default getList;