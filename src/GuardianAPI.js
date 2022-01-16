import { GUARDIAN_API_KEY } from "./config";
import axios from 'axios';

export const getGuardianArticles = async () => {
    return await axios.get(`https://content.guardianapis.com/search?api-key=${GUARDIAN_API_KEY}`)
        .then(({ data }) => {
            return data;
        })
};