const express = require('express');
const router = express.Router()
const {House} = require('../../Models/House')
const mongoose = require('mongoose');
require('dotenv/config');


const mongoURI = process.env.MONGO_URI;
mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, {useNewUrlParser:true}, (error) => {
    if(error){
        return console.log(error);
    }
    return console.log('Connection to MongoDB was successful');
})

router.post('/', (req, res)=> {

    
    const house = new House({
        house_location:{
            province: req.body.province,
            city: req.body.city
        },
        house_details: {
            price: req.body.price,
            isSaleOrRent: req.body.isSaleOrRent,
            numOfBedRoom: req.body.numOfBedRoom,
            numOfBathRoom: req.body.numOfBathRoom,
            numOfGarages: req.body.numOfGarages
            // houseimage: req.body.houseimage,
        }
    })
    console.log("House ==> ", house);
    house.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message:err});
    })
    // const form = new Formidable.IncomingForm();
    // form.parse(request, (error, fields, files) => {

    //     const {price, city, province, numOfBedrooms, numOfBathrooms, numOfGarages, isSaleOrRent} = fields;
        
    //     const {house_image} = files;

    //     cloudinary.uploader.upload(
    //         house_image.path, 
    //         {folder: '/samples/ecommerce'}, 
    //         async(error, results)=> {

    //         if(error){
    //             return console.log(error);
    //         }
    //         const image_url = results.url;

    //         const newHouse = new House({

    //             house_location:{
    //                 province:province,
    //                 city:city,
    //             },
    //             house_details: {
    //                 price:price,
    //                 isSaleOrRent:isSaleOrRent,
    //                 numOfBedRoom:numOfBedrooms,
    //                 numOfBathRoom:numOfBathrooms,
    //                 numOfGarages:numOfGarages,
    //                 house_image:image_url,
    //             }
    //         });
    //         const savedHouse = await newHouse.save();
    //         return response.status(200).json(savedHouse);

    //     })
    // })
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
