import React, { useState } from 'react'
import '../StyleSheet/HouseListingForm.css'
import axios from 'axios'

const HouseListingForm = () => {

  const [price, setPrice] = useState(0);
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [numOfBedRoom, setNumOfBedRoom] = useState(1);
  const [numOfBathRoom, setNumOfBathRoom] = useState(1);
  const [numOfGarages, setNumOfGarages] = useState(1);
  const [isSaleOrRent, setIsSaleOrRent] = useState('');
  const [houseimage, setHouseimage] = useState(null);

  const ListProperty = () =>{
    const url = 'http://localhost:5000/';

    const data = new FormData();
    data.append('price', price);
    data.append('city', city);
    data.append('province', province);
    data.append('numOfBedRoom', numOfBedRoom);
    data.append('numOfBathRoom', numOfBathRoom);
    data.append('numOfGarages', numOfGarages);
    data.append('isSaleOrRent', isSaleOrRent);
    // data.append('houseimage', houseimage);

    axios.post(url, data).then(res => {
      console.log(res.data);
    }).catch(error =>console.log(error))
  }

  return (
    <div className='HouseListing__container'>
        <form className='form'>
            <h3>LIST YOUR PROPERTY</h3>
            <label>House Price</label>
            <input type='number' placeholder="House Price" onChange={(e) =>setPrice(e.target.value)} value={price}/>
            <label>House Location(Province)</label>
            <input type="text" placeholder='House Location' onChange={(e) =>setProvince(e.target.value)} value={province}/>
            <label>House Location(City)</label>
            <input type="text" placeholder='House Location' onChange={(e) =>setCity(e.target.value)} value={city}/>
            <label>Sale or Rent</label>
            <select onChange={(e) =>setIsSaleOrRent(e.target.value)} value={isSaleOrRent}>
                <option>...</option>
                <option value={'SALE'}>SALE</option>
                <option value={'RENT'}>RENT</option>
            </select>
            <label>Number of bedrooms</label>
            <input 
            type="number" 
            placeholder='Number of bedrooms' 
            onChange={(e) =>setNumOfBedRoom(e.target.value)} value={numOfBedRoom}/>
            <label>Number of bathrooms</label>
            <input type='number' placeholder="Number of bathrooms" onChange={(e) =>setNumOfBathRoom(e.target.value)} value={numOfBathRoom}/>
            <label>Number of garages</label>
            <input type='number' placeholder='Number of garages' onChange={(e) =>setNumOfGarages(e.target.value)} value={numOfGarages}/>
            {/* <label>House Image</label> */}
            {/* <input type='file' onChange={(e) =>setHouseimage(e.target.files[0])} /> */}
            <button onClick={ListProperty}>LIST YOUR PROPERTY</button>
        </form>
    </div>
  )
}

export default HouseListingForm