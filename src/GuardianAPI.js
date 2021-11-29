import { GUARDIAN_API_KEY } from "./config";
import axios from 'axios';

export const getGuardianArticles = async () => {
    const response = await axios.get(
        `https://content.guardianapis.com/search?api-key=${GUARDIAN_API_KEY}`
    );
    const json = response.data.response.results.slice(0, 4);
    // console.log(json)
    return json;
};

// async function componentDidMount() {
//     try {
//         const response = await getGuardianArticles();
//         this.setState({ articles: response.articles });
//     } catch (error) {
//         this.setState({ apiError: "Could not find any articles" });
//     }
// }