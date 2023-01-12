import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { houseForSaleAction } from '../store/Actions/HouseFetchAction';

function ForSale() {
  // const dispatch = useDispatch();
  // const { loading, error, houseForSaleList } = useSelector(
  //   (state) => state.houseForSale);
  
  // useEffect(()=> {
  //   dispatch(houseForSaleAction());
  // });

  return (
    <div className='Houses_container'>
        <h1>House</h1>
    </div>
  )
}

export default ForSale