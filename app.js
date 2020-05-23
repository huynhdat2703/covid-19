const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
// const URI = "https://code.junookyo.xyz/api/ncov-moh/";
const URI = "https://api.covid19api.com/summary";

app.set('view engine', 'pug');
app.set('views', './views');

function getData(req, res) {
    axios.get(URI)
        .then((response) => {
            res.render('index', {
                data: response.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

app.get('/', getData);

app.listen(port, () => {
    console.log('Server is running on port', port);
})