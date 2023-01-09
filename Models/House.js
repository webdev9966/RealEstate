const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
    house_location: {
        province:{type: "String", required: true},
        city:{type: "String", required:true},
    },

    house_details: {
        price:{type: "Number", required:true},
        isSaleOrRent:{type: "String", required:true},
        numOfBedRoom:{type: "String", required:true},
        numOfBathRoom:{type: "String", required:true},
        numOfGarages:{type: "String", required:true},
    },
});

const House = mongoose.model("House", HouseSchema);

module.exports = {House};