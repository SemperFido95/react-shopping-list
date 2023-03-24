import { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';

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
        })
    }

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
            fetchShoppingList();
            console.log('testing post');
        }).catch((error) => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong');
        });
    }

    useEffect(() => {
        fetchShoppingList();
    }, []);
    
    function markPurchased(id) {
        let completeObject = {purchased: true};
        axios.put(`/list/${id}`, completeObject).then((response) => {
            console.log(response);
            fetchShoppingList();
        }).catch((error) => {
            console.log(`Error in PUT ${error}`);
            alert('Something went wrong.');
        })
    }

    function deleteItem(id) {
        axios.delete(`/list/${id}`).then((response) => {
            console.log(response);
            fetchShoppingList();
        }).catch((error) => {
            console.log(`Error in DELETE ${error}`)
            alert('Something Went Wrong')
        })
    }

    return (
        <div>
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
                                <td>{item.purchased.toString()}</td>
                                <td><button onClick={() => markPurchased(item.id)} style={item.purchased === true ? {display: 'none'} : {display: ''}}>Purchase</button></td>
                                <td><button onClick={() => deleteItem(item.id)}>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default GetList;