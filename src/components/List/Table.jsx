import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function TableSet( {itemList, fetchShoppingList} ) {


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
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align='right'>Item</TableCell>
                    <TableCell align='right'>Quantity</TableCell>
                    <TableCell align='right'>Units</TableCell>
                    <TableCell align='right'>Purchased</TableCell>
                    <TableCell align='right'></TableCell>
                    <TableCell align='right'></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
           
                {
                    itemList.map((item) => (
                        <TableRow key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell align='right'>{item.name}</TableCell>
                            <TableCell align='right'>{item.quantity}</TableCell>
                            <TableCell align='right'>{item.unit}</TableCell>
                            <TableCell align='right'>{item.purchased.toString()}</TableCell>
                            <TableCell align='right'><IconButton variant="contained" onClick={() => markPurchased(item.id)} style={item.purchased === true ? {display: 'none'} : {display: ''}}><ShoppingCartIcon /></IconButton></TableCell>
                            <TableCell align='right'><IconButton variant='contained' onClick={() => deleteItem(item.id)}><DeleteIcon /></IconButton></TableCell>
                        </TableRow>
                    ))
                }
            
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default TableSet;