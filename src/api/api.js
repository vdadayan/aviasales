import axios from 'axios';

export const instance = axios.create({
    baseURL: "https://front-test.beta.aviasales.ru/",
})


export const aviasalesApi = {
    getKey: async () => {
        const res = await instance(`search `);
        localStorage.setItem('key', res.data.searchId)
    },
    getTickets: async (key) => {
        const res = await instance(`tickets?searchId=${key}`)
        return res.data.tickets;
    }
}