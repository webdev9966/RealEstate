import { FETCH_HOUSE_FAIL, FETCH_HOUSE_REQUEST, FETCH_HOUSE_SUCCESS } from "./ActionTypes"
import axios from 'axios';

export const houseForSaleAction =async(dispatch) => {
    
    const url = '/house-sale'
    try {
        dispatch({type:FETCH_HOUSE_REQUEST})
        const {data} = await axios.get(url);
        dispatch({type:FETCH_HOUSE_SUCCESS, payload: data});
    } catch (error){
        dispatch({type: FETCH_HOUSE_FAIL, payload: error });
    }
}
export const houseForRentAction =async(dispatch) => {
    
    const url = '/house-rent'
    try {
        dispatch({type:FETCH_HOUSE_REQUEST})
        const {data} = await axios.get(url);
        dispatch({type:FETCH_HOUSE_SUCCESS, payload: data});
    } catch (error){
        dispatch({type: FETCH_HOUSE_FAIL, payload: error });
    }
}