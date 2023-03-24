import axios from 'axios';

function Clear ({fetchShoppingList}) {
    function clearAll() {
        axios.delete('/list').then((response) => {
            console.log(response);
            fetchShoppingList();
        }).catch((error) => {
            console.log(`Error in clearAll ${error}`);
            alert('Something went wrong.');
        });
    }
    
    return (
        <button onClick={clearAll}>Clear</button> 
    )
}

export default Clear;