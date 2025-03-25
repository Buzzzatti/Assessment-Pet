import axios from 'axios';

export const getInfo = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return axios.get(url);
};
