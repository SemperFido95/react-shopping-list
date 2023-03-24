import axios from 'axios';

function Table( {itemList, fetchShoppingList} ) {
    
    function deleteItem(id) {
        axios.delete(`/list/${id}`).then((response) => {
            console.log(response);
            fetchShoppingList();
        }).catch((error) => {
            console.log(`Error in DELETE ${error}`)
            alert('Something Went Wrong')
        })
    }
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

    return (
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
    )
}

export default Table;