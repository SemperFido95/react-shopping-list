const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "shoppinglist"';
    
    pool.query(queryText).then((results) => {
        res.send(results.rows)
    }).catch((error) => { 
        console.log(error);
        res.sendStatus(500);
    });
});

// Any special consideration for unit being optional? 
// Not sure if SQL or axios will throw an error if req.body.unit is empty 

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "shoppinglist" ("name", "quantity", "unit") VALUES ($1, $2, $3);'
    pool.query(queryText, [req.body.name, req.body.quantity, req.body.unit])
    .then((result) => {
        res.sendStatus(200);
        console.log(result);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});


module.exports = router;