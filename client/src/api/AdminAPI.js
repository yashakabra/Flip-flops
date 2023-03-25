import axios from 'axios';

const URL = process.env.REACT_APP_URL || 'http://localhost:8000';

export const getUnverifiedUsers = async (packet) => {
    try {
        return await axios.get(`${URL}/admin/getUnverifiedUsers`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${packet.email}#${packet.password}`,
            }
        });
    } catch (error) {
        console.log("ERROR IN GETTING PENDING REQUEST ", error);
    }
}

export const getUnverifiedUsersGovt = async (packet) => {
    try {
        return await axios.get(`${URL}/admin/getUnverifiedUsersGovt`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${packet.email}#${packet.password}`,
            }
        });
    } catch (error) {
        console.log("ERROR IN GETTING PENDING REQUEST ", error);
    }
}

export const getSinglePostDetailsAdmin = async (packet) => {
    console.log(packet.email);
    try{
        return await axios.get(`${URL}/admin/getSinglePostDetailsAdmin/?id=${packet.useremail}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${packet.email}#${packet.password}`,
            }
        });
    }catch(error){
        console.log("ERROR IN GETTING DETAILS OF SINGLE USER ", error);
    }
}

export const addUserPostDetailsAdmin = async (packet) => {
    try {
        return await axios.post(`${URL}/admin/addUserPostDetailsAdmin`, packet.data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${packet.email}#${packet.password}`,
            }
        });
    } catch (error) {
        console.log("ERROR IN ADDING REQUEST  ", error);
    }
}