import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const apiGetTutorials = async() => {

    try {
        const url = `${baseUrl}/tutorials`
        const data = await axios.get(url).then(res => res.data);   
        return data;     
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const apiSearchTutorials = async(param) => {

    try {
        const url = `${baseUrl}/tutorial?description=${param}`
        const data = await axios.get(url).then(res => res.data);   
        return data;     
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const apiDeleteTutorials = async() => {

    try {
        const url = `${baseUrl}/deletetutorials`
        const data = await axios.delete(url).then(res => res.data);   
        return data;     
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const apiCreateTutorial = async(param) => {

    try {
        const url = `${baseUrl}/createtutorial`
        const data = await axios.post(url, param).then(res => res.data);  
        return data;     
    } catch (error) {
        console.log(error);
        return null;
    }
}