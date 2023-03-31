import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { height, maxHeight, maxWidth } from '@mui/system';
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
            <Paper elevation={1}>
                <form onSubmit={submitForm}>
                    <Paper elevation={12}>
                        Name: <input type="text" value={itemName}
                        onChange={(e) => setItemName(e.target.value)}/>
                    </Paper>
                    <br />
                    <Paper elevation={7}>
                        Quantity: <input type="number" value={itemQuantity}
                        onChange={(e) => setItemQuantity(e.target.value)} />
                    </Paper>
                    <Paper elevation={12}>
                        Unit: <input type="text" value={itemUnit}
                        onChange={(e) => setItemUnit(e.target.value)}/>
                    </Paper>
                    {/* <input id="submit-button" type="submit"/> */}
                </form>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '1em'
                    }}
                >
                    <Paper elevation={10}>
                    <Button 
                        variant="contained" onClick={submitForm}
                    >
                        Submit
                    </Button>
                    </Paper>                                    
                </Box>
                </Paper>
        </Box>
    )
}

export default Item;