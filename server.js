const express = require('express');
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.get('/',(req, res) => {
    res.send('we are on home');
})
const houseListingRoute = require('./Routes/HouseListing/HouseListing')

app.use('/', houseListingRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server started on PORT ${PORT}`);
})