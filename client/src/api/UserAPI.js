import axios from 'axios';
const URL = process.env.REACT_APP_URL || 'http://localhost:8000';


export const getValidUsers = async (packet) => {
    const token = packet.token;
    try {
        return await axios.get(`${URL}/user/getValidUsers`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
    } catch (error) {
        console.log("ERROR IN GETTING ALL REQUEST ", error);
    }
}

export const addUserPostDetails = async (packet) => {
    const token = packet.token;
    console.log(packet);
    try {
        return await axios.post(`${URL}/user/addUserPostDetails`, packet.data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
    } catch (error) {
        console.log("ERROR IN ADDING REQUEST  ", error);
    }
}

export const getSinglePostDetails = async (packet) => {
    const token = packet.token;
    try{
        return await axios.get(`${URL}/user/getSinglePostDetails/?id=${packet.email}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
    }catch(error){
        console.log("ERROR IN GETTING DETAILS OF SINGLE USER ", error);
    }
}