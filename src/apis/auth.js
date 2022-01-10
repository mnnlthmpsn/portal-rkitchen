import axios from "axios";
import { BASE_URL } from "./base";

export const req_login = async payload => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/local`, payload)
        return data
    } catch (err) {
        err.response && console.log(err)
    }
}