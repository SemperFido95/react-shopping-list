import axios from 'axios';
import swal from 'sweetalert';

function Reset({fetchShoppingList}) {
    
    function resetAll() {
        swal({
            title: "Are you sure you want to reset?",
            text: "Once reset, you will not be able to recover recent items",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.put('/list').then((response) => {
                    console.log(response);
                    fetchShoppingList();
                }).catch((error) => {
                    console.log(`Error in PUT ${error}`);
                    alert('Something went wrong.');
                });
            swal("Your list is now reset", {
                icon: "success",
            });
            }  else {
                swal("No changes have been made");
            }
          });
    }

    return (
        <button onClick={resetAll}>Reset</button>
    )
}

export default Reset;

