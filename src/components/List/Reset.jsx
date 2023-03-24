import axios from 'axios';

function Reset({fetchShoppingList}) {
    function resetAll() {
        axios.put('/list').then((response) => {
            console.log(response);
            fetchShoppingList();
        }).catch((error) =>{
            console.log(`Error in PUT ${error}`);
            alert('Something went wrong.');
        })
    }

    return (
        <button onClick={resetAll}>Reset</button>
    )
}

export default Reset;

