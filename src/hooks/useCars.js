import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';
const useCars = ()=>{
    const [cars, setCars] = useState([]);
    const {token} = useAuth();
    useEffect(() => {
        axios.get('https://shrouded-tundra-85918.herokuapp.com/cars', {
            headers: {
                'authorization' : `Bearer ${token}`
            }
        })
            .then(res => setCars(res.data));
    }, [])
    return [cars];
}

export default useCars;