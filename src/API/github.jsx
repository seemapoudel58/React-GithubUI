import axios from "axios";

const BASE_URL ='https://api.github.com';


export const fetchUserData = async(username) => {
    try{

        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    }
    catch(error){
        console.log('Error: ', error);
        throw new Error("Unable to retrieve user data");
    }
}

export const fetchUserRepositories   = async (username) => {
    try{
        const response= await axios.get(`${BASE_URL}/users/${username}/repos`);
        return response.data;

    }catch(error){
        console.error('failed to fetch user repositories:', error);
        throw error;
    }
}
