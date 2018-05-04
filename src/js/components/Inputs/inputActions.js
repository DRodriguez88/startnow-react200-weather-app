import axios from 'axios';


export const getWeather = (city) => {
    return {
        type: 'GET_WEATHER',
        payload: axios.get(`/api/${city}`)
    }
        
}