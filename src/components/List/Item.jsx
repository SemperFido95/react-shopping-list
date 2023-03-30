import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { maxHeight, maxWidth } from '@mui/system';
import Button from '@mui/material/Button';




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
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'nowrap',
                '& > :not(style)': {
                    m: 1,
                    width: maxWidth,
                    height: maxHeight,
                },
            }}        
        >
            <Paper elevation={0}>
                <form onSubmit={submitForm}>
                    <Paper elevation={6}>
                        Name: <input type="text" value={itemName}
                        onChange={(e) => setItemName(e.target.value)}/>
                    </Paper>
                    <br />
                    <Paper elevation={6}>
                        Quantity: <input type="number" value={itemQuantity}
                        onChange={(e) => setItemQuantity(e.target.value)} />
                    </Paper>
                    <Paper elevation={6}>
                        Unit: <input type="text" value={itemUnit}
                        onChange={(e) => setItemUnit(e.target.value)}/>
                    </Paper>
                    <br />
                    <Button><input id="submit-button" type="submit"/></Button>
                </form>
                </Paper>
        </Box>
    )
}

export default Item;