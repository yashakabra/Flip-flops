import axios from 'axios';

const URL = process.env.REACT_APP_URL || 'http://localhost:8000';

export const getAllPendingRequest = async (packet) => {
    const token = data.token;
    try {
        return await axios.get(`${URL}/admin/getAll`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
    } catch (error) {
        console.log("ERROR IN GETTING PENDING REQUEST ", error);
    }
}

export const acceptRequest = async (packet) => {
    const token = packet.token;
    try {
        return await axios.post(`${URL}/admin/acceptRequest`, packet.data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });
    } catch (error) {
        console.log("ERROR IN ACCEPTING PENDING REQUEST ", error);
    }
}