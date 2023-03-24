const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * FROM shoppinglist ORDER BY purchased, name';
    pool.query(queryText).then((results) => {
        res.send(results.rows)
    }).catch((error) => { 
        console.log(error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    // console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "shoppinglist" ("name", "quantity", "unit") VALUES ($1, $2, $3);'
    pool.query(queryText, [req.body.name, req.body.quantity, req.body.unit])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
 console.log(req.params.id);
  const deleteIndex = Number(req.params.id);
let queryText = 'DELETE from "shoppinglist" WHERE "id" = $1'
pool.query(queryText, [deleteIndex]).then((results) => {
    res.sendStatus(200);   
}).catch((error) => {
console.log(error);
res.sendStatus(500);
});

});


 router.put('/:id', (req, res) => {
    console.log('Put Request made for /list');
    let itemID = req.params.id;
    console.log(req.params);
    let queryText = 'UPDATE "shoppinglist" SET "purchased" = $1 WHERE "id" = $2';
    pool.query(queryText, [true, itemID]).then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;