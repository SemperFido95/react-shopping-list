import axios from 'axios';
import swal from 'sweetalert';
import Button from '@mui/material/Button';

function Clear ({fetchShoppingList}) {
    function clearAll() {
        swal({
            title: "Are you sure you want to clear your list?",
            text: "Once cleared, you will not be able to recover recent items",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete('/list').then((response) => {
                    console.log(response);
                    fetchShoppingList();
                }).catch((error) => {
                    console.log(`Error in clearAll ${error}`);
                    alert('Something went wrong.');
                });
            swal("Your Items Has Been Cleared", {
                icon: "success",
            });
            }  else {
                swal("No changes have been made");
            }
          });  
    }
    
    return (
        <Button onClick={clearAll}>Clear</Button> 
    )
}

export default Clear;