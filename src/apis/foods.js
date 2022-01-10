import axios from 'axios'
import { BASE_URL } from './base'

export const req_foods = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/foods?populate=*`)
        return data
    } catch (err) {
        err.response && console.log(err.response)
    }
}

export const req_add_food = async payload => {
    try {
        const { data } = await axios.post(`${BASE_URL}/foods?populate=*`, payload)
        return data
    } catch (err) {
        err.response && console.log(err.response)
    }
}