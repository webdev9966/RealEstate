import React from 'react'
import '../StyleSheet/HouseListingForm.css'

const HouseListingForm = () => {
  return (
    <div className='HouseListing__container'>
        <div className='form'>
            <h3>LIST YOUR PROPERTY</h3>
            <label>House Price</label>
            <input type='number' placeholder="House Price" />
            <label>House Location(Province)</label>
            <input type="text" placeholder='House Location' />
            <label>House Location(City)</label>
            <input type="text" placeholder='House Location' />
            <label>Sale or Rent</label>
            <select>
                <option>...</option>
                <option>SALE</option>
                <option>RENT</option>
            </select>
            <label>Number of bedrooms</label>
            <input type="number" placeholder='Number of bedrooms' />
            <label>Number of bathrooms</label>
            <input type='number' placeholder="Number of bathrooms" />
            <label>Number of garages</label>
            <input type='number' placeholder='Number of garages' />
        </div>
    </div>
  )
}

export default HouseListingForm