import axios from 'axios';

function Item({
                itemName,
                setItemName,
                itemQuantity,
                setItemQuantity,
                itemUnit,
                setItemUnit,
                fetchShoppingList
}) {

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
}

export default Item;