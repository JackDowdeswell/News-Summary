import { GUARDIAN_API_KEY } from "./config";
import Guardian from 'guardian-js';

const guardian = new Guardian(GUARDIAN_API_KEY, false);

export const getGuardianArticles = async () => {
    try {
        const res = await guardian.content.search('', {
            showFields: 'all',
            type: 'article',
            orderBy: 'newest'
        })
        return (JSON.parse(res.body).response.results);
    } catch (err) {
        console.log(err)
    }
};

// export const getGuardianArticles = async () => {
//     return await axios.get(`https://content.guardianapis.com/search?api-key=${GUARDIAN_API_KEY}`)
//         .then(({ data }) => {
//             return data;
//         })
// };