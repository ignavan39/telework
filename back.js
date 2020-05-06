const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const csv = require('csv-parser');
const { runInThisContext } = require('vm');
const results = [];

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5000'); // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
fs
    .createReadStream('table.csv')
    .pipe(csv())
    .on('data', data => results.push(data))
    .on('end', () => {
        console.log(results);
    });

app.get('/api', (req, res, next) => {
    res.send(results);
});
/*router.get('/', (req, res) => {
    res.send('/client/public/index.html');
});*/

if (process.env.NODE_ENV === 'production') {
    //static
    app.use(express.static(__dirname + '/public/'));

    //SPA

    app.get(/.*/, (req, res) => res.sendFile(__dirname + +'/public/index.html'));
};


app.listen(PORT, () => {
    console.log(`Server startred on port ${PORT}`);
});