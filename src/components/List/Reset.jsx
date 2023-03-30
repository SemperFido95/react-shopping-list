import axios from 'axios';
import swal from 'sweetalert';
import Button from '@mui/material/Button';

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
        <Button variant='contained' color="error" onClick={resetAll}>Reset</Button>
    )
}

export default Reset;

