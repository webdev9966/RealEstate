const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors());

const houseListingRoute = require('./Routes/HouseListing/HouseListing')

app.use(houseListingRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server started on PORT ${PORT}`);
})