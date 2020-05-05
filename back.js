const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const serveStatic = require('serve-static');
const app = express();
const PORT = process.env.PORT || 3000;
const csv = require('csv-parser');
const { runInThisContext } = require('vm');
const results = [];
app.use(serveStatic(__dirname + '/client/dist'));

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

app.get('/', (req, res, next) => {
    res.send(results);
});
/*router.get('/', (req, res) => {
    res.send('/client/public/index.html');
});*/
app.listen(PORT, () => {
    console.log(`Server startred on port ${PORT}`);
});