import axios from "axios";

const URL = '';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
       console.log('Error while calling add User Api ', error); 
    }
}