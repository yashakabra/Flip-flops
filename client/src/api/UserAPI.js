import axios from 'axios';

const URL = process.env.REACT_APP_URL || 'http://localhost:8000';

export const getAllUserPost = async (packet) => {
    const token = packet.token;
    try {
        return await axios.get(`${URL}/user/getAll`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
    } catch (error) {
        console.log("ERROR IN GETTING ALL REQUEST ", error);
    }
}

export const createRequest = async (packet) => {
    const token = packet.token;
    console.log(packet);
    try {
        return await axios.post(`${URL}/user/createRequest`, packet.data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
    } catch (error) {
        console.log("ERROR IN CREATING REQUEST  ", error);
    }
}