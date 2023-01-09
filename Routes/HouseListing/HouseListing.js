const express = require('express');
const router = express.Router()
const { House } = require('../../Models/House')
const Formidable = require('formidable');
const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

// cloudinary.config({

//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
// });

mongoose.connect(mongoURI, (error) => {
    if(error){
        return console.log(error);
    }
    return console.log('Connection to MongoDB was successful');
})

router.post('/api/house-Listing', (request, response)=> {
    
    const form = new Formidable.IncomingForm();
    form.parse(request, (error, fields, files) => {

        const {price, city, province, numOfBedrooms, numOfBathrooms, numOfGarages, isSaleOrRent} = fields;
        
        const {houseImage} = files;

        cloudinary.uploader.upload(houseImage.filepath, {folder: '/houseAgency/houses'}, async(error, results)=> {

            if(error){
                return console.log(error);
            }
            const image_url = results.url;

            const newHouse = new House({

                house_location:{
                    province:province,
                    city:city,
                },
                house_details: {
                    price:price,
                    isSaleOrRent:isSaleOrRent,
                    numOfBedrooms:numOfBedrooms,
                    numOfBathrooms:numOfBathrooms,
                    numOfGarages:numOfGarages,

                }
            });
            const savedHouse = await newHouse.save();
            return response.status(200).json(savedHouse);

        })
    })
})

module.exports = router;
        
        // console.log('Price: ', price);
        // console.log('PROVINCE: ', province);
        // console.log('city: ', city);
        // console.log('numOfBedroom: ', numOfBedroom);
        // console.log('numOfBathroom: ', numOfBathroom);
        // console.log('numOfGarages: ', numOfGarages);
        // console.log('isSaleOrRent: ', isSaleOrRent);
        // console.log('houseImage: ', houseImage.path);
